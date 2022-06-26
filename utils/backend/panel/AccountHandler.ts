import { MongoClient } from "mongodb";
import clientPromise from "../Mongodb";
import bcrypt from "bcryptjs";
import {verify} from 'jsonwebtoken';
import Account from "./Account";

const secret = process.env.TOKEN_SECRET;

export default class AccountHandler {

    async createAccount(username:string, password:string) {
        const col = await getCollection();

        if (await col.findOne({username})) {
            return false;
        }

        const hash = await bcrypt.hash(password, 10);
        const account:Account = {
            username, password: hash, administrator: false
        }
        
        await col.insertOne(account);
        return true;
    }

    async verifyCredentials(username:string, password:string) {
        const col = await getCollection();

        const acc = await col.findOne({username});
        if (!acc) {
            return false;
        }

        if (!bcrypt.compareSync(password, acc.password)) {
            return false;
        }

        return true;
    }

    verifyCookie(cookie:string) {
        if (!secret) {
            console.log("major problem no secret in .env");
        }

        try {
            verify(cookie, secret!);   
            return true;
        } catch(e) {
            return false;
        }
    }

  
}

const getCollection = async () => {
    const client:MongoClient = await clientPromise;
    return client.db(process.env.DATABASE_NAME).collection(process.env.COLLECTION_ACC!);
}
