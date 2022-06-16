import { NextPage } from "next";
import styles from "../styles/components/Contact.module.css";

const Contact:NextPage = () => {
    return (<div className="container">
        <div className="text-center">
            <h3 className="section-title">Mehr von uns</h3>
            <p>Hier findest du weitere Informationen und Kontaktmöglichkeiten zu uns.</p>
        </div>

        <div className={styles.socials}>
            <a className={styles.social}></a>
            <a className={styles.social}></a>
            <a className={styles.social}></a>
            <a className={styles.social}></a>
        </div>
    </div>)
}

export default Contact;