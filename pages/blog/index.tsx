import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../../components/landing/Navbar";
import BlogHandler from "../../utils/backend/blog/BlogHandler";
import BlogPost from "../../utils/backend/blog/BlogPost";
import cookie from 'cookie';
import AccountHandler from "../../utils/backend/panel/AccountHandler";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '../../styles/components/blog/BlogListPage.module.css';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";

let maxPage = -1;

const BlogListPage = (props:any) => {
    const [articles, setArticles] = useState<BlogPost[]>();
    const [page, setPage] = useState<number>(1);
    const router = useRouter();
    maxPage = props.maxPages;

    if ((articles == undefined || articles?.length === 0) && props.filtered.length !== 0) {
        setArticles(props.filtered);
    }

    const getArticles = async (newPage:number, initial:boolean) => {
        const res = await axios.post("api/blog", {
            order: "fetchAll",
            page: newPage,
        }, { withCredentials: true });
    
        if (res.data.success) {
            const articles = res.data.response;
            maxPage = res.data.maxPages;
    
            setPage(newPage);
            setArticles(articles);
    
        }
    }

    return <section id="blogListPage" className="fullPageBg">
        <Head>
            <title>Team taco. | Blog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" async />
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' async />
        </Head>
        <Navbar />
        
        <h2 className="text-center text-light">Unser Blog</h2>

        <div className="d-flex justify-content-center">
            <div onClick={e => getArticles(page - 1 > 1 ? page - 1 : 1, false)} className={`btn btn-outline-light my-3 mx-2 ${page === 1 ? "disabled" : ""}`}>{"<"}</div>
            <div onClick={e => getArticles(page + 1, false)} className={`btn btn-outline-light my-3 mx-2 ${maxPage === page ? "disabled" : ""}`}>{">"}</div>
        </div>

        <div className="row justify-content-center">
            { articles ? articles.map((article:BlogPost, index) => {
                    return <div onClick={e => router.push("/blog/" + article._id)} key={index} className={`col-xs-12 col-md-3 ${styles.lightBg} my-2 mx-3`} style={{maxWidth: "90%"}}>
                        <h6 className="mb-3">{article.title == undefined ? "Undefined" : article.title.substring(0, 20)}</h6>
                        <p>{article.body == undefined ? "Undefined" : article.body.substring(0, 200)}</p>

                        <div className="d-flex mt-3">
                            <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                            <p className={`mx-2`}>{article.views}</p>
                        </div>

                    </div>;
                }) : null }
        </div>
       
    </section>
}

export async function getServerSideProps(ctx:any) {

    const cookies = cookie.parse(ctx.req.headers.cookie + "");
    const loggedIn = cookies.authorization !== undefined && new AccountHandler().verifyCookie(cookies.authorization!);

    const handler = new BlogHandler();
    const {response, maxPages} = await handler.fetchLatest(1, loggedIn);

    const filtered = await JSON.parse(JSON.stringify(response));

    return { 
        props: {filtered, maxPages}
    }
}

export default BlogListPage;