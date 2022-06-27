import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";

import styles from "../../styles/components/panel/BlogDashboard.module.css";

const BlogManager : NextPage = () => {
    return <div className={`text-light ${styles.topicPane}`}>
        <h3 className="text-center">Blog Artikel</h3>
        <div className="d-flex justify-content-center">
            <div className={`btn btn-success my-3`}>Neuen Artikel erstellen</div>    
        </div>

        <div className="row d-flex">
            <div className="col-lg-3">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
            </div>
        </div> <br></br>
        <div className="row d-flex">
            <div className="col-lg-3">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className={`${styles.blogPreview} ${styles.lightBg} my-2 mx-3`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
            </div>
        </div> <br></br>
        
    </div>
}

export default BlogManager;