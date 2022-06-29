import { MongoClient, ObjectId } from 'mongodb';
import { cloneElement } from 'react';
import clientPromise from '../Mongodb';
import BlogPost from './BlogPost';

const pageLimit = 8; 

export default class BlogHandler  {

    async fetchLatest(page:number, loggedIn:boolean) {
        const col = await getCollection();
        const response:any = await col.find({}).sort({ createdAt: -1 }).toArray(); // createdAt: -1 is descending order (newest first)

        const filtered:BlogPost[] = [];

        if (!loggedIn) {
            response.map((post:BlogPost) => {
                if (post.visibility === "published") {
                    filtered.push(post);
                }
            });
        }

        return {response: (loggedIn ? response : filtered).slice((page-1)*pageLimit, page*pageLimit), maxPages: Math.ceil((loggedIn ? response : filtered).length/pageLimit)};
    }

    async fetchMostviewed(targetId:string) {
        const col = await getCollection();
        return await col.find({ author: targetId}).sort({ views: -1 }).limit(6).toArray();
    }

    async fetchDashboard() {
        const col = await getCollection();

        const newest = await col.find({}).sort({ createdAt: -1 }).limit(3).toArray();
        const mostViewed = await col.find({}).sort({ views: -1 }).limit(3).toArray();

        return { newest, mostViewed };
    }


    async fetchPost(id:string) {
        if (!isValidObjectId(id)) {
            return null;
        }

        const col = await getCollection();

        const post = await col.findOne({ _id: new ObjectId(id) });

        if (post) {
            col.updateOne({ _id: new ObjectId(id) }, { $inc: { views: 1 } }, {upsert: true});
        }

        return post;
        // TODO format respond obj
    }

    async createPost(author:string, title:string, body:string, visibility: "published" | "draft" | "removed" | "hidden") {
        const col = await getCollection();

        const post:BlogPost = {
            createdAt: new Date(),
            visibility,
            title,
            body,
            images: "taco-default",
            author,
            views: 0
        }

        await col.insertOne(post as any);
    }

    async deletePost(id:string) {
        if (!isValidObjectId(id)) {
            return false;
        }

        const col = await getCollection();
        await col.deleteOne({ _id: new ObjectId(id) });
        return true; 
    }

    async updateImage(id:string, image:string) {
        if (!isValidObjectId(id)) {
            return false;
        }

        const col = await getCollection();
        if (!await col.findOne({ _id: new ObjectId(id) })) {
            return false;
        }

        await col.updateOne({ _id: new ObjectId(id) }, { $set: { images: image }}, {upsert: true});
        return true;
    }

    async updatePost(id:string, title:string, body:string, visibility: "published" | "draft" | "removed" | "hidden") {
        if (!isValidObjectId(id)) {
            return false;
        }

        const col = await getCollection();
        if (!await col.findOne({ _id: new ObjectId(id) })) {
            return false;
        }

        await col.updateOne({ _id: new ObjectId(id) }, { $set: { title, body, visibility }}, {upsert: true});
        return true;
    }
}

const getCollection = async () => {
    const client:MongoClient = await clientPromise;
    return client.db(process.env.DATABASE_NAME).collection(process.env.COLLECTION_POST!);
}

function isValidObjectId(id:string){
    
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}