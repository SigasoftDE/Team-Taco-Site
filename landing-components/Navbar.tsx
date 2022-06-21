import { NextPage } from "next";
import Link from "next/link";

import styles from "../styles/components/Navbar.module.css";

const Navbar : NextPage = () => {

    return <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className={`navbar-brand ${styles.logo}`} href="#">Taco.</a>
      <div className={`collapse navbar-collapse ${styles.header} `} id="navbar">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className={`${styles.headerAnchor} nav-link`} aria-current="page"><Link href="/#">Home</Link></a></li>
          <li className="nav-item"><a className={`${styles.headerAnchor} nav-link`} aria-current="page"><Link href="/#team">Team</Link></a></li>
          <li className="nav-item"><a className={`${styles.headerAnchor} nav-link`} aria-current="page"><Link href="/blog">Blog</Link></a></li>
          <li className="nav-item"><a className={`${styles.headerAnchor} nav-link`} aria-current="page"><Link href="/#project-devlopment">Projektentwicklung</Link></a></li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;