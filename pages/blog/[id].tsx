import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/landing/Navbar";
import cookie from 'cookie';

import styles from '../../styles/components/blog/BlogPage.module.css';
import AccountHandler from "../../utils/backend/panel/AccountHandler";
import BlogHandler from "../../utils/backend/blog/BlogHandler";
import BlogPost from "../../utils/backend/blog/BlogPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

import listStyles from '../../styles/components/blog/BlogListPage.module.css';

const BlogPage = (props:any) => {
    const { post, loggedIn } = props;
    const created = new Date(post.createdAt);


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
            <h3>{post.title}</h3>
            <p>{props.authorName} | {created.getDate() +  "." + created.getMonth() + "." + created.getFullYear()}</p>

            <div className="d-flex mt-3">
                <FontAwesomeIcon className={listStyles.dashViewsIcon} icon={faEye}/>
                <p className={`mx-2`}>{post.views}</p>
            </div>

            <div className="row">
                <p className="col-xs-12 col-md-8" dangerouslySetInnerHTML={{__html: post.body.replaceAll(/\n/g, "<br />")}}></p>
                <img src="/logo.svg" alt="blogImage"  className="col-xs-12 col-md-4 bg-transparent" />
            </div>
            
        </div>

    </div>
}

export async function getServerSideProps(ctx:any) {
    const { id } = ctx.query;

    const cookies = cookie.parse(ctx.req.headers.cookie);
    const loggedIn = !cookies.authorization || new AccountHandler().verifyCookie(cookies.authorization!);


    const bHandler = new BlogHandler();
    const post = await JSON.parse(JSON.stringify(await bHandler.fetchPost(id)));

    const aHandler = new AccountHandler();
    const authorName = (await aHandler.getUserById(post.author))?.username;

    return { 
        props: { post, loggedIn, authorName }
    }
}

export default BlogPage;