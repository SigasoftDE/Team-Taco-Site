import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

export default async function (req:NextApiRequest, res:NextApiResponse) {

    const filePath = path.resolve(".", "public/user-uploads/62b857976604c0c725b15847/trash.jpeg");
    const imageBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "image/jpeg");
    res.send(imageBuffer);
}