import { NextPage } from "next";

import styles from '../../styles/components/landing/Footer.module.css';

const Footer : NextPage = () => {
    return (<div id="footer" className={`w-100 text-center text-white ${styles.footer}`}>
        <p>{"Made with <3 by"} <a href="https://sigasoft.de">Sigasoft </a>
         (<a href="https://github.com/Sigabiel">Ben Hacker</a>)</p>
    </div>);
}

export default Footer;