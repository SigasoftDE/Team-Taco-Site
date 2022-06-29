import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Blog from "../../components/panel/Blog";
import Dashboard from "../../components/panel/Dashboard";
import Images from "../../components/panel/Images";
import PanelNav from "../../components/panel/PanelNav";
import Profile from "../../components/panel/Profile";
import Users from "../../components/panel/Users";

import cookie from 'cookie';
import fs, { accessSync } from 'fs';

import styles from '../../styles/components/panel/BlogDashboard.module.css';
import AccountHandler from "../../utils/backend/panel/AccountHandler";
import Account from "../../utils/backend/panel/Account";

const BlogDashboard = (props:{ exportObj:{images:string[], acc:Account}, success:boolean}) => {

    const [selection, setSelection] = useState<string>("Dashboard");

    const selectionHandler = (props:any) => {
        if (selection === "Dashboard") {
            return <Dashboard />
        } else if (selection === "Users") {
            return <Users />
        } else if (selection === "Blog") {
            return <Blog />
        } else if (selection === "Profile") {
            return <Profile profilePicture={props.payload.acc.profilePicture} />
        } else if (selection === "Bilder") {
            return <Images images={props.payload.images ? props.payload.images : []} />
        }
    }

    return <div className={`bg ${styles.panelPane}`}>
        <Head>
            <title>Team taco. | Panel</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />
        </Head>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" async />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' async />

        <div className={`container bg-transparent ${styles.panel}`}>
            <PanelNav updateSelection={(newSel) => setSelection(newSel)} />
            {selectionHandler(props)}
        </div>
    </div>;
}

export async function getServerSideProps(ctx:any) {
    const cookies = cookie.parse(ctx.req.headers.cookie + "");
    if (!cookies.authorization || !new AccountHandler().verifyCookie(cookies.authorization!)) {
        return { props: { success: false}};
    }

    const payload:any = {};

    const aHandler = new AccountHandler();
    const acc:Account = (await aHandler.getUserById( aHandler.getUser(cookies.authorization!)!._id!))! as any;
    payload.acc = await JSON.parse(JSON.stringify(acc));

    const path = "./public/user-uploads/" + acc._id + "/";
    if (fs.existsSync(path)) {
        const images = fs.readdirSync(path);
        payload["images"] = images;
    }

    return { 
        props: { payload, success: true }
    }
}

export default BlogDashboard;