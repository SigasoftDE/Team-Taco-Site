import { NextPage } from "next";

import styles from "../../styles/components/landing/Team.module.css";

const Team : NextPage = () => {
    // TODO make them clickable

    return (<div id="team" className={styles.pane}>
        <div className="container text-center">
            <div className="col-md-0 ">
                <h2 className="section-title">Das Team</h2>
                <p>Die Frage wer hinter all dem steckt ist mehr als berechtigt <br/>
                Also das sind wir!</p>
            </div>

            <div className={styles.pbRow} data-aos="fade-down">
                <div className="col-md-3 col-sm-3 member">
                    <img src="./img/pb-blobs/dark-green.png" alt="dark-green-blob" className={styles.pb} />
                    <h4>Sebastian</h4>
                </div>
                <div className="col-md-3 col-sm-3 member">
                    <img src="./img/pb-blobs/red.png" alt="dark-green-blob" className={styles.pb} />
                    <h4>Martha</h4>
                </div>
                <div className="col-md-3 col-sm-3 member">
                    <img src="./img/pb-blobs/light-green.png" alt="dark-green-blob" className={styles.pb} />
                    <h4>Merit</h4>
                </div>
            </div>

            <div className={styles.pbRow} data-aos="fade-up" data-aos-delay="300">
                <div className="col-md-3 col-sm-3 member">
                    <img src="./img/pb-blobs/yellow.png" alt="orange-blob" className={styles.pb} />
                    <h4>Tom</h4>
                </div>
                <div className="col-md-3 col-sm-3 member">
                    <img src="./img/pb-blobs/green.png" alt="green-blob" className={styles.pb} />
                    <h4>Katharinna</h4>
                </div>
                <div className="col-md-3 col-sm-3 member">
                    <img src="./img/pb-blobs/orange.png" alt="orange-blob" className={styles.pb} />
                    <h4>Charlie</h4>
                </div>
            </div>
        </div>
    </div>)
}

export default Team;