import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import Hero from '../components/landing/Hero'
import Navbar from '../components/landing/Navbar'
import Sponsors from '../components/landing/Sponsors'
import Team from '../components/landing/Team'
import Separator from '../components/landing/Separator'
import AOS from 'aos';


import styles from '../styles/Home.module.css'
import 'aos/dist/aos.css';

import Timeline from '../components/landing/Timeline'
import Contact from '../components/landing/Contact'
import Footer from '../components/landing/Footer'

const Home: NextPage = () => {

  useEffect(() => {
    AOS.init();
  })


  return (
    <div id="page">
      <Head>
        <title>Team taco. | Das beste Formel 1 Team des Schulzentrum am Sunds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" async />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' async />
      </Head>

      <div className="bg">
        <Navbar />
        <Hero />
      </div>
      
      <Team />
      <Separator type="wave" wave='wave2'/>
      <Sponsors/>
      <Separator type="wave" wave="wave3"  />
      <Timeline />
      <Separator type="wave" wave='wave1' />
      <Contact />
      <Footer/>
      
      
    </div>
  ) // #c19b48
}

export default Home
