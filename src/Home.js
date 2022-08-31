import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './sections/Service/Services'
import AboutLanding from './sections/About/About'
import Stats from './sections/Stats/Stats'
import Projects from './sections/Projects/Projects'
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