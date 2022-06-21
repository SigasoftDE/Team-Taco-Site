import { NextPage } from "next";

import styles from "../../styles/components/landing/Sponsors.module.css";

const Sponsors : NextPage = () => {
    return <div id="sponsors" className={styles.pane}>
        
        <div className="container text-center " data-aos="fade-up">
            <h2 className="text-center section-title">Unsere Sponsoren</h2>
            <p>Sponsoren zu bekommen, war eines unserer
                wichtigsten Ziele im Verlaufe unserer Arbeit. <br />
                Wir haben uns zunächst Unternehmen aus der
                Umgebung aufgelistet und ersten telefonischen
                Kontakt aufgenommen.</p>
        </div>

        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className={`col-xs-12 col-md-6  ${styles.scale}`}>
                    
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className={`carousel-inner`}>
                        <div className="carousel-item active">
                            <img src="./img/sponsors/3DDesign24.png" className={`d-block w-100`}/>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/sponsors/originalraeder.png" className={`d-block w-100`}/>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/sponsors/globus.png" className={`d-block w-100`}/>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/sponsors/volksbank.png" className={`d-block w-100`}/>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/sponsors/daheim_restaurant.png" className={`d-block w-100   `}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                </div>
                <div className={`col-xs-12 col-md-6 ${styles.flexCenter}`}>

                    <h3>Marketing & Partnerschaften</h3>

                    <p>
                    Kam ein Sponsoring in
                    Frage, erhielten die Unternehmen die Details
                    per Email oder wenn die Unternehmen in
                    unserer Nähe lagen gingen wir auch persönlich
                    vorbei. Unser Marketingkonzept zielte
                    hauptsächlich auf eine enge und effiziente
                    Zusammenarbeit mit unseren Partnern sowie
                    förderliche und klare Kommunikation ab. <br/> <br/>
                    Unser Bestreben, die Sponsoren über unsere
                    Arbeit zu informieren, zeigten wir ebenfalls
                    beim Gestalten unserer Website und das
                    Entwerfen unseres Flyers. Bei Letzterem
                    kooperierten wir mit einem anderen Team. <br/>
                    Diese Zusammenarbeit verlieh uns gleichzeitig
                    auch einen Einblick in die Ideen und die
                    Organisation zur Durchführung und Gestaltung
                    der Aufgaben der anderen Gruppe. So
                    unterstützten und inspirierten wir uns
                    gegenseitig und verminderten das
                    Konkurrenzdenken.
                    </p>
                </div>

            </div>
        </div>
        
        
    </div>
}

export default Sponsors;