import { createDecipheriv } from "crypto";
import { NextPage } from "next";
import { useContext } from "react";

import styles from "../../styles/components/panel/BlogDashboard.module.css";
import Account from "../../utils/backend/panel/Account";
import { myAccountContext } from "./AccountContext";
import UploadButton from "./utils/UploadButton";

const Images = (props:{images:string[]}) => {
    const ctx = useContext(myAccountContext);

    return <div className={`text-light ${styles.topicPane}`}>
        <div className="d-flex justify-content-center align-items-center mb-3" style={{ flexDirection: "column"}}>
            <h3 className="text-center mb-3">Gespeicherte Bilder</h3>
            <UploadButton title="Hochladen" />
        </div>
        

        <div className={`${styles.blogListFlexBox} justify-content-center`}>
            { props.images ? props.images.map((image, index) => {
                return <div key={index} >
                    <img src={"./user-uploads/" + ctx?._id + "/" + image} width={280} height={256} className={`${styles.blogListItem} ${styles.blogPreview} ${styles.lightBg} my-2 mx-3`} />
                </div>;
            }) : null}
        </div>
        

    </div>;
}

export default Images;
