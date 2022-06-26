import { Document } from "mongodb";

export default interface Account extends Document {
    username:string,
    password:string;
    administrator:boolean;
}