import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
    state: {
        type: String,
        default: "draft"
    },
    title: {
        type: String,
        default: "Untitled"
    },
    body: {
        type: String,
        default: "This is a blog post"
    },
    images: [{
        type: String
    }],
    author: {
        type: String
    },
    views: {
        type: Number
    }

}, {timestamps: true});

export default mongoose.model("Blog Post", blogPostSchema);

