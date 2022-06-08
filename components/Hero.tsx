import { NextPage } from "next";
import { useEffect } from "react";

import styles from "../styles/components/Hero.module.css";

const Hero : NextPage = () => {
    useEffect(() => {
        const explore:HTMLElement = document.getElementById("explore") as HTMLElement;
        const lCloud:HTMLElement = document.getElementById("cloud2") as HTMLElement;
        const rCloud:HTMLElement = document.getElementById("cloud1") as HTMLElement;
    
        window.addEventListener("scroll", () => {
          const value = window.scrollY;
    
          explore.style.marginTop = value * .5 + "px";
    
          lCloud.style.left = -value * .5 + "px";
          lCloud.style.opacity = (1 - value * .005) + "";
    
          rCloud.style.left = value * .5 + "px";
          rCloud.style.opacity = (1 - value * .005) + "";
        })
      })

    return <section className={styles.section}>
        <img src="./logo.svg" className={styles.logoImage} />
        <img src="./img/desert-bg.png" className={styles.desert} alt="desert" />
        <img src="./img/cloud1.png" className={styles.cloud1} alt="cloud1" id="cloud1" />
        <img src="./img/cloud2.png" className={styles.cloud2} alt="cloud2" id="cloud2" />
        <a href="#team" id="explore" className={styles.btn}>Erfahre Mehr</a>
    </section>
}

export default Hero;