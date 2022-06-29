import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import styles from "../../styles/components/panel/BlogDashboard.module.css";
import BlogPost from "../../utils/backend/blog/BlogPost";
import { myAccountContext } from "./AccountContext";
import UploadButton from "./utils/UploadButton";

let lastFetch:number = -1;

const Profile = (props:{ profilePicture:string }) => {
    const [articles, setArticles] = useState<BlogPost[]>();
    const ctx = useContext(myAccountContext);
    const router = useRouter();

    const getArticles = async () => {
        if (lastFetch + 1000 > Date.now()) {
            return;
        }
        lastFetch = Date.now();

        const res = await axios.post("api/blog", {
            order: "mostViewed",
            targetId: ctx!._id,
        }, { withCredentials: true });
    
        if (res.data.success) {
            const newArticles = res.data.response;
            setArticles(newArticles);
        }
    }

    const updateProfile = async (file:string) => {
        const res = await axios.post("api/panel/protect/users", {
            order: "updateProfilePicture",
            picture: file
        }, { withCredentials: true });

        if (!res.data.success) {
            Swal.fire("Fehler", "Profil konnten nicht gesetzt werden", "error");
        }
    }

    useEffect(() => {
        getArticles();
    })

    return <div className={`text-light ${styles.topicPane} d-flex`}>
        <div className={`col-lg-4 d-flex flex-column justify-content-center align-items-center`}>
            <img src={props.profilePicture === "taco-default" ? "./logo.svg" : "./api/serve/" + ctx?._id + "/" + props.profilePicture} alt="profilepicture" width={128} height={128} className={styles.profileIcon} />
       
            <h5 className={`mt-4`}>Profilbild</h5>
            <UploadButton callback={updateProfile} title="Ändern" /> <p></p><br/>

            <h5 >Benutzername</h5>
            <p className={styles.thinSmall}>{ctx?.username}</p> <br/>      
        </div>

        <div className="col-lg-8 ">
            <h3>Beliebteste Artikel</h3>
            <div className={styles.blogListFlexBox}>
                { articles ? articles.map((article:BlogPost, index) => {
                    return <div onClick={e => router.push("/blog/" + article._id)} key={index} className={`${styles.blogSectionElement} ${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                        <h6 className="mb-3">{article.title.substring(0, 20)}</h6>
                        <p>{article.body.substring(0, 200)}</p>
                        <div className="d-flex mt-3">
                            <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                            <p className={`mx-2 ${styles.dashViewsNumber}`}>{article.views}</p>
                        </div>
                    </div>;
                }) : <h2>Lädt</h2> }
            </div>
        </div>

        
    </div>
}

export default Profile;