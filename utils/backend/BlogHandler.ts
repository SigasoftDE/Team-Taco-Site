import mongoose from 'mongoose';
import BlogInterface from './BlogPostInterface';
import BlogPost from './BlogPost';

export class BlogHandler  {
    constructor() {
        if (mongoose.connections[0].readyState) {
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