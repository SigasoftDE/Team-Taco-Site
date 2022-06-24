import { Document } from "mongodb";

interface Account extends Document {
    username:string,
    password:string;
    administrator:boolean;
}