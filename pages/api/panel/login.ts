import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import AccountHandler from "../../../utils/backend/panel/AccountHandler";

const secret = process.env.TOKEN_SECRET;
const accHandler = new AccountHandler();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { username, password} = req.body;

    if (await accHandler.verifyCredentials(username, password)) {
        const token = sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 *24 * 30,
            username: username,
            admin: false
        }, secret!);
        
        const serialised = serialize("authorization", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        });

        res.setHeader("Set-Cookie", serialised);
        res.status(200).json({response: "Success!"});
    } else {
        res.status(404).json({response: "Invalid credentials!"}); 
    }
}