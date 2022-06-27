import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/landing/Navbar";

import styles from "../styles/components/panel/Login.module.css";

const Login : NextPage = () => {

    const [username, setUsername] = useState<String>();
    const [password, setPassword] = useState<String>();

    const login = async () => {
        Swal.fire({
            title: "Logging in...",
            text: "Please wait while we log you in.",
            showConfirmButton: false,
            allowOutsideClick: false
        });

        const response = await axios.post("/api/panel/login", { username, password}, {withCredentials: true});

        console.log(response);
        Swal.close();
        if (response.status === 202) {
            window.location.href = "/panel";
        } else {
            Swal.fire("Fehler", "Benutzername oder Passwort falsch!", "error");
        }
    }

    return <div className="bg vh-100">
            <Navbar />
            <div className={`${styles.login}`}>
                <Head>
                    <title>Team taco. | Login</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" ></script>
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
                </Head>

            

                <div className={styles.pane}>
                    <h2 className="text-center">Login</h2>
                    
                    <form>
                        <div className={styles.txtField}>
                            <input onChange={e => setUsername(e.target.value)} type="text" required/>
                            <span></span>
                            <label>Benutzername</label>
                        </div>
                        <div className={styles.txtField}>
                            <input onChange={e => setPassword(e.target.value)} type="password" required/>
                            <span></span>
                            <label>Passwort</label>
                        </div>
                    </form>

                    <button onClick={e => login()} className={styles.loginBtn} type="button" >Login</button>

                </div>
            </div>

    </div>;
}

export default Login;