import mongoose from 'mongoose';
import BlogInterface from './BlogPostInterface';
import BlogPost from './BlogPost';

const pageLimit = 10; 

export default class BlogHandler  {
    constructor() {
        if (!mongoose.connections || mongoose.connections[0].readyState) {
            return;
        } else {
            mongoose.connect(`${process.env.PART1}${process.env.CLUSTERUSER}:${process.env.CLUSTERPASSWORD}${process.env.USERDB}`, err => {
                if (err) {
                    throw err
                } else {
                    console.log('connected to database');
                }
            })
        }
    }

    async fetchLatest(page:number) {
        console.log(mongoose.models);
        console.log((await mongoose.models.BlogPost.find({}).exec())[0]);
        
        // const startIndex = Math.floor(totalPosts.length / pageLimit) * page;
        // const stopIndex = Math.min(startIndex + pageLimit, totalPosts.length);

        const response:BlogInterface[] = [];

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
        return await BlogPost.findOne({ _id: id}).exec();

        // TODO format respond obj
    }

    async createPost(author:string, title:string, body:string) {
        const post = new BlogPost({
            title,
            body,
            author
        });
        await post.save();
    }

    async updatePost(post:BlogInterface) {
        // validate check
        return await BlogPost.findOneAndUpdate({ _id: post._id }, post).exec();
    }
}