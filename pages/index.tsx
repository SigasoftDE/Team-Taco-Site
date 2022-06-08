import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  useEffect(() => {
    const explore:HTMLElement = document.getElementById("explore") as HTMLElement;
    const lCloud:HTMLElement = document.getElementById("cloud2") as HTMLElement;
    const rCloud:HTMLElement = document.getElementById("cloud1") as HTMLElement;

    window.addEventListener("scroll", () => {
      const value = window.scrollY;

      explore.style.marginTop = value * .5 + "px";

      lCloud.style.left = -value * .5 + "px";
      lCloud.style.opacity = (1 - value * .005) + "";

      rCloud.style.left = value * .5 + "px";
      rCloud.style.opacity = (1 - value * .005) + "";
    })
  })

  return (
    <div id="page">
      <Head>
        <title>Team taco. | Das beste Formel 1 Team des Schulzentrum am Sunds</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></Script>

      <Navbar />

      <section>
        <img src="./logo.svg" id="logo" className={styles.logoImg} />
        <img src="./img/desert-bg.png" id="desert" alt="desert" />
        <img src="./img/cloud1.png" id="cloud1" alt="cloud1"/>
        <img src="./img/cloud2.png" id="cloud2" alt="cloud2" />
        <a href="#sec" id="explore" className={styles.btn}>Erfahre Mehr</a>
      </section>

      <Team />
    </div>
  )
}

export default Home
