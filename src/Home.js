import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutLanding from './components/AboutLanding'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Parallax from './components/Parallax'
import Footer from './components/Footer'




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