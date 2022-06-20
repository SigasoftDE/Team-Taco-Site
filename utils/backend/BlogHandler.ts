import mongoose from 'mongoose';
import BlogInterface from './BlogInterface';

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

    async fetchPost(id:number) {
        return {} as BlogInterface;
    }

    async createPost(author:string, title:string, body:string) {

    }

    async updatePost(post:BlogInterface) {
        // validate check
        
    }
}