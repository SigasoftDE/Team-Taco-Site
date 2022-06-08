import { NextPage } from "next";
import styles from '../styles/Home.module.css'

const Navbar : NextPage = () => {

    // TODO bootstrap navbar
    return <header>
        <a href="#" className={styles.logo}>Taco.</a>
            <ul>
            <li><a href="#" className={styles.active}>Home</a></li>
            <li><a href="#team" >Team</a></li>
            <li><a href="#" >Work</a></li>
            <li><a href="#" >Contact</a></li>
        </ul>
    </header>
}

export default Navbar;