import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { NextPage } from "next";
import styles from "../../styles/components/landing/Contact.module.css";
import { useEffect } from "react";
import Link from "next/link";

const Contact:NextPage = () => {

    return (<div className={`${styles.pane} `}>
        <div className="container">
            <div className="text-center">
                <h3 className="section-title text-white">Mehr von uns</h3>
                <p className={`text-white ${styles.footerText}`}>Hier findest du weitere Informationen und Kontaktmöglichkeiten zu uns.</p>
            </div>

            <div id="mediaBox" className={styles.socials}>
                <a href="https://www.instagram.com/team.taco.hst/" className={styles.social}><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://vm.tiktok.com/ZMNFk5GkH/" className={styles.social}><FontAwesomeIcon icon={faTiktok}/></a>
                <a href="mailto:team.taco.hstsz@outlook.de" className={styles.social}><FontAwesomeIcon icon={faEnvelope}/></a>
            </div>

            <div className={styles.socials}>
                <Link href="/blog" style={{ textDecoration: "none"}}>
                    <div id="blogBtn" className={`${styles.social} ${styles.blog}`}>
                    Unser Blog
                    </div>
                </Link>
            </div>
        </div>
    </div>)
}

export default Contact;