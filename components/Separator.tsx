import { NextPage } from "next";

import styles from "../styles/components/Seperator.module.css";

type Props = {
    type: "curve" | "cycle";
    firstColor?: string;
    secondColor?: string;
}

const Separator = (props:Props) => {
    return <div className={styles.pane}>
        {
            props.type === "curve" ?
            (<div className={styles.curve}>

            </div>)
            :
            (<></>)
        }
    </div>
}

export default Separator;