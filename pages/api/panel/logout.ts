import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req:NextApiRequest, res:NextApiResponse) {
    const { cookies } = req;
    const jwt = cookies.authorization;

    if (!jwt) {
        return res.json({ success: false, response: "You are not logged in!"});
    } 

    const serialized = serialize("authorization", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({success: true, response: "Successfully logged out!"});
}