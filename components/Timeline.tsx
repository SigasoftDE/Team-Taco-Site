import { NextPage } from "next";
import styles from "../styles/components/Timeline.module.css";

const Timeline : NextPage = () => {
    return <div id="project-devlopment" className="container">
      <div className={styles.timelineBox}>
        <span className={styles.timelinePoint}></span>
        <span className={styles.timelinePoint}></span>
        <span className={styles.timelinePoint}></span>
        <span className={styles.timelinePoint}></span>
      </div>

    </div>
  
}
 // <div className="dropdown animated bounceIn" style="left: -88px;">
export default Timeline;