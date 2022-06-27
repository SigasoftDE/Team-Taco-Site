import { NextPage } from "next";

import { faEye } from '@fortawesome/free-solid-svg-icons'


import styles from "../../styles/components/panel/BlogDashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard : NextPage = () => {
    return <div className={`text-light ${styles.topicPane}`}>
        <h1 className="text-center">Übersicht</h1>
        <div className="d-flex justify-content-between mt-5">
            <div className={`${styles.lightBg} w-100 mx-2`}>
                <h3 className="text-center">Neuste Posts</h3>
                <div className={`${styles.blogPreview} my-2`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>532</p>
                    </div>
                </div>
                <div className={`${styles.blogPreview} my-2`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>243</p>
                    </div>
                </div>
                <div className={`${styles.blogPreview} my-2`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>58</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.lightBg} w-100 mx-2`}>
                <h3 className="text-center">Am meisten gelesen</h3>
                <div className={`${styles.blogPreview} my-2`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>5386</p>
                    </div>
                </div>
                <div className={`${styles.blogPreview} my-2`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>3586</p>
                    </div>
                </div>
                <div className={`${styles.blogPreview} my-2`}>
                    <h6>Title</h6>
                    <p>Content this ist my text lorem ipfs das dwasd wads </p> <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon className={styles.dashViewsIcon} icon={faEye}/>
                        <p className={`mx-2 ${styles.dashViewsNumber}`}>2576</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.lightBg} w-100 mx-2`}>
                <h3 className="text-center">Seiten Aufrufe</h3>
            </div>
        </div>

    </div>;
}

export default Dashboard;