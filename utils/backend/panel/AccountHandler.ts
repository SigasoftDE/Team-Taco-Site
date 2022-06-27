import { MongoClient, ObjectId } from "mongodb";
import clientPromise from "../Mongodb";
import bcrypt from "bcryptjs";
import {decode, verify} from 'jsonwebtoken';
import Account from "./Account";

const secret = process.env.TOKEN_SECRET;

export default class AccountHandler {

    async createAccount(username:string, password:string, administrator:boolean) {
        const col = await getCollection();

        if (await col.findOne({username})) {
            return false;
        }

        const hash = await bcrypt.hash(password, 10);
        const account:Account = {
            username, password: hash, administrator
        }
        
        await col.insertOne({ username: account.username,
            password: account.password,
            administrator: account.administrator });
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

        return acc;
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

    getUser(cookie:string) {
        try {
            const token:Account = decode(cookie) as Account;
            return token;
        } catch(e) {
            return null;
        }
    }

    async getAll() {
        const col = await getCollection();
        const response = await col.find({}).project({ _id: 1, username: 1, administrator: 1}).toArray();
        return response;
    }

    async deleteOne(id:string) {
        const col = await getCollection();

        const resp = await col.deleteOne({_id: new ObjectId(id)});
        return resp;
    }

    async toggleAdministration(id:string) {
        const col = await getCollection();
        const acc = await col.findOne({_id: new ObjectId(id)});
        if (!acc) {
            return false;
        }

        col.updateOne({_id: new ObjectId(id)}, {$set: { administrator: !acc.administrator }}, {upsert: true});
        return true;
    }
}

const getCollection = async () => {
    const client:MongoClient = await clientPromise;
    return client.db(process.env.DATABASE_NAME).collection(process.env.COLLECTION_ACC!);
}
