import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import AccountHandler from "../../../utils/backend/panel/AccountHandler";

const secret = process.env.TOKEN_SECRET;
const accHandler = new AccountHandler();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { username, password} = req.body;

    const acc = await accHandler.verifyCredentials(username, password);
    if (acc) {
        const token = sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 *24 * 30,
            username: username,
            _id: acc._id,
            administrator: acc.administrator
        }, secret!);
        
        const serialised = serialize("authorization", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        });

        res.setHeader("Set-Cookie", serialised);
        res.status(202).json({success: true, response: "Success!"});
    } else {
        res.status(200).json({success: false, response: "Invalid credentials!"}); 
    }
}