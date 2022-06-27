import { NextApiRequest, NextApiResponse } from "next";
import Account from "../../../../utils/backend/panel/Account";
import AccountHandler from "../../../../utils/backend/panel/AccountHandler";

const accHandler = new AccountHandler();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.cookies.authorization || !accHandler.verifyCookie(req.cookies.authorization!)) {
        return res.json({success: false, response: "You are not logged in!"});
    } 

    const { order } = req.body;
    if (!order) {
        return res.json({success: false, response: "No order provided!"});
    }

    const account:Account = accHandler.getUser(req.cookies.authorization!)!;

    if (order == "fetchAll") {
        return res.json({success: true, response: await accHandler.getAll()});
    }

    if (order == "deleteAccount") {
        const { id } = req.body;
        if (!id) {
            return res.json({success: false, response: "No id provided!"});
        }

        if (!account.administrator) {
            return res.json({success: false, response: "You are not an administrator!"});
        }

        accHandler.deleteOne(id);
        return res.json({success: true, response: "Success!"});
    }

    if (order == "toggleAdmin") {
        const { id } = req.body;
        if (!id) {
            return res.json({success: false, response: "No id provided!"});
        }

        if (!account.administrator) {
            return res.json({success: false, response: "You are not an administrator!"});
        }

        accHandler.toggleAdministration(id);
        return res.json({success: true, response: "Success!"});
    }

    if (order == "create") {
        const { username, password, administrator } = req.body;
        if (!username || !password) {
            return res.json({success: false, response: "No username or password provided!"});
        }

        if (!account.administrator) {
            return res.json({success: false, response: "You are not an administrator!"});
        }

        accHandler.createAccount(username, password, administrator);
        return res.json({success: true, response: "Success!"});
    }
    
}