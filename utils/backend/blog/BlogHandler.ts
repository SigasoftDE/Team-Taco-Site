import { MongoClient } from 'mongodb';
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

        return (loggedIn ? response : filtered).slice((page-1)*pageLimit, page*pageLimit);
    }

    async getMaxPages() {
        const col = await getCollection();
        const response:any = await col.find({}).toArray();
        return Math.ceil(response.length/pageLimit);
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

        // TODO format respond obj
    }

    async createPost(author:string, title:string, body:string, visibility: "published" | "draft" | "removed" | "hidden") {
        const col = await getCollection();

        const post:BlogPost = {
            createdAt: new Date(),
            visibility,
            title,
            body,
            images: [],
            author,
            views: 0
        }

        await col.insertOne(post as any);
    }

    async updatePost(post:BlogPost) {
        // validate check
    }
}

const getCollection = async () => {
    const client:MongoClient = await clientPromise;
    return client.db(process.env.DATABASE_NAME).collection(process.env.COLLECTION_POST!);
}