import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useContext } from "react";

import styles from "../../styles/components/panel/BlogDashboard.module.css";
import { myAccountContext } from "./AccountContext";

const Profile : NextPage = () => {
    const ctx = useContext(myAccountContext);


    return <div className={`text-light ${styles.topicPane} d-flex`}>
        <div className="col-lg-4 d-flex justify-content-center">
            <img src="./logo.svg" alt="profilepicture" width={128} height={128} className={styles.profileIcon} />
        </div>

        <div className="col-lg-8 ">
            <h3>Benutzername</h3>
            <p>{ctx?.username}</p> <br/>      
        
            <h3>Profilbild</h3>
            <div className="btn btn-outline-light">Ändern</div> <p></p><br/>

            <h3>Beliebteste Artikel</h3>
            <div className="d-flex">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 w-25 mx-3`}>
                        <h6>Title</h6>
                        <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                        
                        <div className="d-flex">
                            <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                            <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                        </div>
                </div>
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 w-25 mx-3`}>
                        <h6>Title</h6>
                        <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                        
                        <div className="d-flex">
                            <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                            <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                        </div>
                </div>
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 w-25 mx-3`}>
                        <h6>Title</h6>
                        <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                        
                        <div className="d-flex">
                            <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                            <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                        </div>
                </div>
            </div>
        </div>

        
    </div>
}

export default Profile;