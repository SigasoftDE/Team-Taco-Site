import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sponsors from '../components/Sponsors'
import Team from '../components/Team'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  

  return (
    <div id="page">
      <Head>
        <title>Team taco. | Das beste Formel 1 Team des Schulzentrum am Sunds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" ></script>
      </Head>

      <Navbar />
      <Hero />
      <Team />
      <Sponsors />
      
    </div>
  )
}

export default Home
