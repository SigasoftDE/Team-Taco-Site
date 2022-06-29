import { NextApiRequest, NextApiResponse } from "next";
import BlogHandler from "../../../../utils/backend/blog/BlogHandler";
import Account from "../../../../utils/backend/panel/Account";
import AccountHandler from "../../../../utils/backend/panel/AccountHandler";

const blogHandler = new BlogHandler();

export default async function (req:NextApiRequest, res:NextApiResponse) {
    if (!req.cookies.authorization || !new AccountHandler().verifyCookie(req.cookies.authorization!)) {
        return res.json({success: false, response: "You are not logged in!"});
    } 

    const { order } = req.body;
    if (!order) {
        return res.json({success: false, response: "No order provided!"});
    }

    const account:Account = new AccountHandler().getUser(req.cookies.authorization!)!;

    if (order === "create") {
        const { title, body, visibility } = req.body;
        if (!title || !body || !visibility) {
            return res.json({success: false, response: "No title, body or visibility provided!"});
        }

        if (body.contains("script")) {
            return res.json({success: false, response: "Scripts are not allowed!"});
        }

        blogHandler.createPost(account._id!, title, body, visibility);
        return res.json({success: true, response: "Success!"});
    }

    if (order === "delete") {
        const { id } = req.body;
        if (!id) {
            return res.json({success: false, response: "No id provided!"});
        }

        blogHandler.deletePost(id);
        return res.json({success: true, response: "Success!"});
    }

    if (order === "updateImage") {
        const { id, image } = req.body;
        if (!id || !image) {
            return res.json({success: false, response: "No id or image provided!"});
        }

        console.log("Updating image", image);

        blogHandler.updateImage(id, image);
        return res.json({success: true, response: "Success!"});
    }

    if (order === "updatePost") {
        const { id, title, body, visibility } = req.body;

        if (body.contains("script")) {
            return res.json({success: false, response: "Scripts are not allowed!"});
        }

        if (!id || !title || !body || !visibility) {
            return res.json({success: false, response: "No id, title, body or visibility provided!"});
        }

        blogHandler.updatePost(id, title, body, visibility);
        return res.json({success: true, response: "Success!"});
    }


}

