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

        blogHandler.createPost(account._id!, title, body, visibility);
        return res.json({success: true, response: "Success!"});
    }


}

