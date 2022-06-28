import { Document } from "mongodb";

export default interface Account extends Document {
    _id?:string,
    username:string,
    password:string,
    profilePicture:string,
    administrator:boolean;
}