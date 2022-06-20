// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from "dotenv";

dotenv.config();
console.log("Backend initiated!");
console.log(process.env.name, " cringe ", process.env.author);

type Data = {
  status: string
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(200).json({ status: "Request failed (Only post requests allowed)"});
    return;
  }

  const body = req.body;
  res.status(200).json({ status: body.cringo });
}
