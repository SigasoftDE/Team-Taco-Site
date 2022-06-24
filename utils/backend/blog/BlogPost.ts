import { Document } from "mongodb"

interface BlogPost extends Document {
    createdAt: Date
    updatedAt: Date
    _id:string

    state: "published" | "draft" | "removed"
    title:string
    body:string
    images:string[]
    author:string
    views:number
}

export default BlogPost;