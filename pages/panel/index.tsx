import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Blog from "../../components/panel/Blog";
import Dashboard from "../../components/panel/Dashboard";
import PanelNav from "../../components/panel/PanelNav";
import Profile from "../../components/panel/Profile";
import Users from "../../components/panel/Users";

import styles from '../../styles/components/panel/BlogDashboard.module.css';

const BlogDashboard : NextPage = () => {

    const [selection, setSelection] = useState<string>("Dashboard");

    const selectionHandler = () => {
        if (selection === "Dashboard") {
            return <Dashboard />
        } else if (selection === "Users") {
            return <Users />
        } else if (selection === "Blog") {
            return <Blog />
        } else if (selection === "Profile") {
            return <Profile />
        }
    }


    return <div className={`bg ${styles.panelPane}`}>
        <Head>
            <title>Team taco. | Panel</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />
        </Head>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" ></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>

        <div className={`container bg-transparent ${styles.panel}`}>
            <PanelNav updateSelection={(newSel) => setSelection(newSel)} />
            {selectionHandler()}
        </div>
    </div>;
}

export default BlogDashboard;