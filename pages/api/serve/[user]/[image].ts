import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';
import { useRouter } from "next/router";

export default async function (req:NextApiRequest, res:NextApiResponse) {

    const { user, image } = req.query;

    const filePath = path.resolve(".", `user-uploads/${user}/${image}`);
    if (!fs.existsSync(filePath)) {
        return res.send("File not found");
    }

    const imageBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", `image/${(image as string).split(".").pop()}`);
    res.send(imageBuffer);
}