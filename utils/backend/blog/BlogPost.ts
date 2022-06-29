import { Document } from "mongodb"

interface BlogPost extends Document {
    createdAt: Date
    _id?:string

    visibility: "published" | "draft" | "removed" | "hidden"
    title:string
    body:string
    images:string
    author:string
    views:number
}

export default BlogPost;