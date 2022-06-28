import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/landing/Navbar";
import cookie from 'cookie';

import styles from '../../styles/components/blog/BlogPage.module.css';
import AccountHandler from "../../utils/backend/panel/AccountHandler";
import BlogHandler from "../../utils/backend/blog/BlogHandler";
import BlogPost from "../../utils/backend/blog/BlogPost";

const BlogPage = (props:any) => {
    console.log(props.post);

    return <div className="fullPageBg">
        <Head>
            <title>Team taco. | Blog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" ></script>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
        </Head>

        <Navbar />

        <div className={styles.topicPane}>
        </div>

    </div>
}

export async function getServerSideProps(ctx:any) {
    const { id } = ctx.query;

    const cookies = cookie.parse(ctx.req.headers.cookie);
    const loggedIn = !cookies.authorization || new AccountHandler().verifyCookie(cookies.authorization!);


    const handler = new BlogHandler();
    const post = await JSON.parse(JSON.stringify(await handler.fetchPost(id)));
    
    return { 
        props: { post, loggedIn }
    }
}

export default BlogPage;