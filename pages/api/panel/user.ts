import { decode } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import AccountHandler from "../../../utils/backend/panel/AccountHandler";

const accHandler = new AccountHandler();

export default async function (req:NextApiRequest, res:NextApiResponse) {
    const { cookies } = req;
    const jwt = cookies.authorization;

    if (jwt && accHandler.verifyCookie(jwt)) {
        return res.status(200).json({success: true, user: accHandler.getUser(jwt)});
    }

    return res.status(404).json({success: false, response: "You are not logged in"});
}