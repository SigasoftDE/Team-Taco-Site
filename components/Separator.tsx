import { NextPage } from "next";
import { useEffect } from "react";

import styles from "../styles/components/Seperator.module.css";

type Props = {
    type: "curve" | "cycle";
    firstColor?: string;
    secondColor?: string;
}

const Separator = (props:Props) => {

    useEffect(() => {
        const curve = document.getElementById("curve");
        curve?.style.setProperty("--data-firstCl", props.firstColor + "", "");
        curve?.style.setProperty("--data-secondCl", props.secondColor + "", "");

        console.log(curve?.dataset);
    })

    return <div className={styles.pane}>

        {
            props.type === "curve" ?
            (<div id="curve" className={styles.curve} >

            </div>)
            :
            (<></>)
        }
    </div>
}

export default Separator;