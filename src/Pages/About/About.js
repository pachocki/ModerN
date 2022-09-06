import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './about.css'
import image1 from '../../images/about__project.jpg'
import image2 from '../../images/silver_buldings.jpg'

function About() {
  return (
    <div>
    <Navbar/>
    <main className="about__wrapper">
    <div className="about__parallax"></div>
    <div className="about__desc">
      
      <h2>About us</h2>
      <p>ModerN Architects was founded in 2012 with a commitment to making our cities better places to live. 
        We believe that architecture and design matter, and that through our work, we can make a positive difference in the local environment.
         We strive to create buildings that are not just things in themselves, but objects that evoke positive memories .
         </p>
        <br></br>
       <p>With over 300 architects and designers in whole Norway , our work encompasses projects like the museum , church , footbal stadium , private houses
        institutional and educational clients .</p>
        <div className="about__value">
      <div className="about__value__image" data-scroll data-scroll-direction="vertical" data-scroll-speed="2" data-scroll-class="appear" data-scroll-repeat="true">
        <img src={image1} alt="process" />
      </div>
      <div className="about__value__desc">
        <h2>Our design process is open, interactive, and collaborative.</h2>
        <p>We believe that great design need not be created through arrogance and ego, but in a way that can 
          sustain us all and allow each of us to grow and learn.</p>
          <p>Great ideas can come from anyone on the team, and design inspiration from a range of sources, including art, science, history or philosophy.</p>
      </div>
    </div>
    <div className="about__value">
      <div className="about__value__image" data-scroll data-scroll-direction="vertical" data-scroll-speed="-1" data-scroll-class="appear" data-scroll-repeat="true">
        <img src={image2} alt="process" />
      </div>
      <div className="about__value__desc">
        <h2>We believe deeply in the importance of designing sustainably.</h2>
        <p>Sustainable design is at the core of our practice. ModerN Architects has brought sustainability standards to markets
           in Norway, including groundbreaking passive blockhouses</p>
          <p>Great ideas can come from anyone on the team, and design inspiration from a range of sources, including art, science, history or philosophy.</p>
      </div>
    </div>
    </div>
    <div className="about__smart" data-scroll data-scroll-direction="vertical" data-scroll-speed="2" data-scroll-class="appear" data-scroll-repeat="true">
          <span>
          We look for solutions that can have an impact in finding new opportunities for people . That can move the
          needle in some way and contribute to society and culture.
          </span>
        </div>
   
    <div className="about__parallax2"></div>
    
    
    </main>
    <Footer/>
    </div>
    
  )
}

export default About
