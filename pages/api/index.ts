import { NextApiRequest, NextApiResponse } from "next";

export default async (req:NextApiRequest, res:NextApiResponse) => {
    console.log("request was made")
    res.status(200).json({ cringe: "cringe"});
}