import { NextPage } from "next";
import { useEffect } from "react";

import styles from "../../styles/components/landing/Seperator.module.css";

type Props = {
    type: "curve" | "cycle" | "wave";
    firstColor?: string;
    secondColor?: string;

    wave?:string;
}

const Separator = (props:Props) => {

    useEffect(() => {
        if (props.type === "curve") {
            const curve = document.getElementById("curve");
            curve?.style.setProperty("--data-firstCl", props.firstColor + "", "");
            curve?.style.setProperty("--data-secondCl", props.secondColor + "", "");
        }
    })

    return <div className={styles.pane}>

        {
            props.type === "curve" ?
            (<div id="curve" className={styles.curve} ></div>)
            : props.type === "wave" ?
            (<div className={`${styles.wave} ${styles[props.wave!]}`}></div>) 
            :
            (<></>)
        }
    </div>
}

export default Separator;