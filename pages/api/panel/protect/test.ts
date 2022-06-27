import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import AccountHandler from "../../../../utils/backend/panel/AccountHandler";

export default async function (req:NextApiRequest, res:NextApiResponse) {
    if (!req.cookies.authorization || !new AccountHandler().verifyCookie(req.cookies.authorization!)) {
        return res.json({success: false, response: "You are not logged in!"});
    } 
    
    console.log("Loool");
    res.json({lol: "keck"});
}