import { NextPage } from "next";

import { faEye } from '@fortawesome/free-solid-svg-icons'

import styles from "../../styles/components/panel/BlogDashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import BlogPost from "../../utils/backend/blog/BlogPost";
import axios from "axios";

let lastFetch = -1;

const Dashboard : NextPage = () => {
    const [newest, setNewest] = useState<BlogPost[]>();
    const [mostViewed, setMostViewed] = useState<BlogPost[]>();

    const fetchPosts = async () => {
        if (lastFetch + 1000 > Date.now()) {
            return;
        }
        lastFetch = Date.now();

        const res = await axios.post("api/blog", {
            order: "dashboard",
        }, { withCredentials: true });
    
        if (res.data.success) {
            const { newest, mostViewed } = res.data.response;
            setNewest(newest);
            setMostViewed(mostViewed);
        }
    }

    useEffect(() => {
        fetchPosts();
    });

    return <div className={`text-light ${styles.topicPane}`}>
        <h1 className="text-center">Übersicht</h1>
        <div className="d-flex justify-content-between mt-5">
            <div className={` w-100 mx-2`}>
                <h3 className="text-center">Neuste Posts</h3>
                
                { newest ? newest.map((post, index) => {
                    return <div key={index} className={`${styles.blogPreview} my-3`}>
                        <h6>{post.title.substring(0, 20)}</h6>
                        <p>{post.body.substring(0, 150)}</p> <br/>
                        <div className="d-flex">
                            <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                            <p className={`mx-2 ${styles.dashViewsNumber}`}>{post.views}</p>
                        </div>
                    </div>;
                }) : null}
            </div>
            
            
            <div className={` w-100 mx-3`}>
                <h3 className="text-center">Am meisten gelesen</h3>
                { mostViewed ? mostViewed.map((post, index) => {
                    return <div key={index} className={`${styles.blogPreview} my-3`}>
                        <h6>{post.title.substring(0, 20)}</h6>
                        <p>{post.body.substring(0, 150)}</p> <br/>
                        <div className="d-flex">
                            <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                            <p className={`mx-2 ${styles.dashViewsNumber}`}>{post.views}</p>
                        </div>
                    </div>;
                }) : null}
            </div>
            <div className={`$ w-100 mx-3`}>
                <h3 className="text-center">Seiten Aufrufe</h3>
            </div>
        </div>

    </div>;
}

export default Dashboard;