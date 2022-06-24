import { MongoClient } from 'mongodb';
import { cloneElement } from 'react';
import clientPromise from '../Mongodb';
import BlogPost from './BlogPost';

const pageLimit = 10; 

export default class BlogHandler  {

    async fetchLatest(page:number) {
        const col = await getCollection();
        console.log(await col.find({}).toArray());
        
        // const startIndex = Math.floor(totalPosts.length / pageLimit) * page;
        // const stopIndex = Math.min(startIndex + pageLimit, totalPosts.length);

        const response:any = await col.find({}).toArray();

        // for (let i = startIndex; i < stopIndex; i++) {
        //     const post:BlogInterface = {
        //         _id: (totalPosts[i] as any)._id,
        //         createdAt: (totalPosts[i] as any).createdAt,
        //         updatedAt: (totalPosts[i] as any).updatedAt,
                
        //         state: (totalPosts[i] as any).state,
        //         title: (totalPosts[i] as any).title,
        //         body: (totalPosts[i] as any).body,
        //         author: (totalPosts[i] as any).author,
        //         images: (totalPosts[i] as any).images,
        //         views: (totalPosts[i] as any).views
        //     };

        //    response.push(post); 
        // }

        // console.log("Fetched", response);
        return response;
    }


    async fetchPost(id:string) {

        // TODO format respond obj
    }

    async createPost(author:string, title:string, body:string) {
    }

    async updatePost(post:BlogPost) {
        // validate check
    }
}

const getCollection = async () => {
    const client:MongoClient = await clientPromise;
    return client.db(process.env.DATABASE_NAME).collection(process.env.COLLECTION_POST!);
}