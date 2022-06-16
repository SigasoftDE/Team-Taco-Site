import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { NextPage } from "next";
import styles from "../styles/components/Contact.module.css";

const Contact:NextPage = () => {
    return (<div className={`${styles.pane} container`}>
        <div className="text-center">
            <h3 className="section-title">Mehr von uns</h3>
            <p>Hier findest du weitere Informationen und Kontaktmöglichkeiten zu uns.</p>
        </div>

        <div className={styles.socials}>
            <a title="Instagram" className={styles.social}><i className={`fa-brands fa-instagram ${styles.icon}`}></i></a>
            <a className={styles.social}><i className={`fa-brands fa-tiktok`}></i></a>
            <a className={styles.social}></a>
            <a className={styles.social}></a>
            <FontAwesomeIcon icon={faInstagram}/>
        </div>
    </div>)
}

export default Contact;