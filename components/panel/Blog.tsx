import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import blogPost from "../../pages/blog/[id]";

import styles from "../../styles/components/panel/BlogDashboard.module.css";
import BlogPost from "../../utils/backend/blog/BlogPost";
import BlogCreate from "./utils/BlogCreate";

let maxPage = -1;
let lastFetch:number = -1;

const BlogManager : NextPage = () => {
    const [articles, setArticles] = useState<BlogPost[]>();
    const [page, setPage] = useState<number>(1);
    const router = useRouter();

    const getArticles = async (newPage:number, initial:boolean) => {
        if (lastFetch + 1000 > Date.now() && initial) {
            return;
        }
        lastFetch = Date.now();

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

    useEffect(() => {
        getArticles(page, true);
    })

    return <div className={`text-light ${styles.topicPane}`}>
        <h3 className="text-center">Blog Artikel</h3>
        <div className="d-flex justify-content-center">
            <div className={`btn btn-success my-3`}>Neuen Artikel erstellen</div>    
        </div>

        <div className={`${styles.blogListFlexBox}`}>
            { articles ? articles.map((article:BlogPost, index) => {
                return <div onClick={e => router.push("/blog/" + article._id)} key={index} className={`${styles.blogListItem} ${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6 className="mb-3">{article.title.substring(0, 20)}</h6>
                    <p>{article.body.substring(0, 200)}</p>

                    <div className="d-flex mt-3">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>{article.views}</p>
                    </div>

                </div>;
            }) : null }

        </div>
        
        <div className="d-flex justify-content-center">
            <div onClick={e => getArticles(page - 1 > 1 ? page - 1 : 1, false)} className={`btn btn-outline-light my-3 mx-2 ${page === 1 ? "disabled" : ""}`}>{"<"}</div>
            <div onClick={e => getArticles(page + 1, false)} className={`btn btn-outline-light my-3 mx-2 ${maxPage === page ? "disabled" : ""}`}>{">"}</div>
        </div>
        
        
        <BlogCreate />

    </div>
}



export default BlogManager;