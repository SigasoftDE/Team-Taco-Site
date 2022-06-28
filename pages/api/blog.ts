import { NextApiRequest, NextApiResponse } from "next";
import BlogHandler from "../../utils/backend/blog/BlogHandler";
import Account from "../../utils/backend/panel/Account";
import AccountHandler from "../../utils/backend/panel/AccountHandler";

const blogHandler = new BlogHandler();

export default async function (req:NextApiRequest, res:NextApiResponse) {
    const { order } = req.body;
    if (!order) {
        return res.json({success: false, response: "No order provided!"});
    }

    const account:Account = new AccountHandler().getUser(req.cookies.authorization!)!;

    if (order == "fetchAll") {
        const { page } = req.body;
        return res.json({success: true, response: await blogHandler.fetchLatest(page ? page : 1, account.username !== undefined), maxPages: await blogHandler.getMaxPages()});
    }

    if (order == "mostViewed") {
        const { targetId } = req.body;
        return res.json({success: true, response: await blogHandler.fetchMostviewed(targetId)});
    }

    if (order == "dashboard") {
        return res.json({success: true, response: await blogHandler.fetchDashboard()});
    }
}