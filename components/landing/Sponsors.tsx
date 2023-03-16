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
                    </div>
                    <div className={`carousel-inner`}>
                        <div className="carousel-item active">
                            <img src="./img/sponsors/data-experts-logo.png" className={`d-block w-100`}/>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/sponsors/schwarzware.png" className={`d-block w-100`}/>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/sponsors/sailandsurf.png" className={`d-block w-100`}/>
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
                    Im Laufe der Arbeitsphase begaben wir uns auch auf die Suche nach Sponsoren. 
                    Unser erster Schritt war dabei, die Unternehmen, welche wir zunächst heraussuchten und auflisteten, anzurufen. War der telefonische Kontakt erfolgreich, 
                    erhielten die Unternehmen die genauen Details unserer Zusammenarbeit per Email. Hierfür haben wir letzte Saison eine Team-Email-Adresse eingerichtet. 
                    Wenn sich die Unternehmen in unserer Nähe befanden, statteten wir ihnen auch Besuche ab, um den Kontakt persönlicher zu gestalten, oder luden sie zu uns in 
                    die Schule ein. Bei unseren Partnerschaften standen vor allem eine klare und förderliche Kommunikation sowie eine 
                    enge und effiziente Zusammenarbeit im Vordergrund. <br/> <br/>

                    Im Austausch für den Geldbetrag oder das gesponserte Material erwähnen wir die Sponsoren auf der Website, in unserem Unternehmensportfolio und in unserem Teamstand.
                    </p>
                </div>

            </div>
        </div>
        
        
    </div>
}

export default Sponsors;