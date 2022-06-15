import { NextPage } from "next";

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
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#team">Team</a></li>
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#sponsors">Sponsoren</a></li>
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#project-devlopment">Projektentwicklung</a></li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;