import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Services from '../../sections/Service/ServicesSection'
import AboutLanding from '../../sections/About/AboutSection'
import Stats from '../../sections/Stats/StatsSection'
import Projects from '../../sections/Projects/ProjectsSection'
import Parallax from '../../components/Parallax'
import Footer from '../../components/Footer'




function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <AboutLanding/>
    <Stats/>
    <Projects/>
    <Parallax/>
    <Footer/>
    </div>
  )
}

export default Home