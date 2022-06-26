import { NextApiRequest, NextApiResponse } from "next";
import AccountHandler from "../../../utils/backend/panel/AccountHandler";

const accHandler = new AccountHandler();

export default async function (req:NextApiRequest, res:NextApiResponse) {
    const { username, password } = req.body;

    if (!username || !password || typeof username != "string" || typeof password != "string") {
        return res.status(405).json({response: "Invalid credentials!"});
    }

    if (await accHandler.createAccount(username, password)) {
        return res.status(200).json({ response: "Created account succesfully"});
    } else {
        return res.status(400).json({ response: "Account already exists!"});
    }
}