import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { NextPage } from "next";
import styles from "../styles/components/Contact.module.css";
import { useEffect } from "react";

const Contact:NextPage = () => {

    return (<div className={`${styles.pane} container`}>
        <div className="text-center">
            <h3 className="section-title">Mehr von uns</h3>
            <p>Hier findest du weitere Informationen und Kontaktmöglichkeiten zu uns.</p>
        </div>

        <div id="mediaBox" className={styles.socials}>
            <a href="https://www.instagram.com/team.taco.hst/" className={styles.social}><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="https://vm.tiktok.com/ZMNFk5GkH/" className={styles.social}><FontAwesomeIcon icon={faTiktok}/></a>
            <a href="mailto:team.taco.hstsz@outlook.de" className={styles.social}><FontAwesomeIcon icon={faEnvelope}/></a>
        </div>

        <div className={styles.socials}>
            <a id="blogBtn" className={`${styles.social} ${styles.blog}`}>Unser Blog</a>
        </div>
        
    </div>)
}

export default Contact;