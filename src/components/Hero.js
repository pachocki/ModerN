import React from 'react'
import './heroStyle.css'
import { BsFacebook , BsInstagram ,BsDribbble} from 'react-icons/bs'


function Hero() {
  return (
    <div>
    <div className="hero__container">
      <div className="hero__top">
        <div className="hero__top__left" data-scroll data-scroll-direction="vertical" data-scroll-speed="-3" data-scroll-class="appear" data-scroll-repeat="true">
            
            <h1>We Are Here</h1>
            <h1>To Make Dream</h1>
            <h1>Come True</h1>
            <p>We Are Experienced Architectural Consultans</p>
            <p>Who Can Make You Dream Place To Live</p>
            
        </div>
        
      </div>
      <div className="hero__bottom__wrapper">
      <div className="hero__bottom__left">
        <div className="hero__text__decoration">
        <p>REAL ESTATE</p>
        <p> Projects</p>
        <div className="hero__social__media">
          <BsFacebook/>
          <BsInstagram/>
          <BsDribbble/>
        </div>
        
        </div>
        
      </div>
      <div className="hero__bottom__right" data-scroll data-scroll-direction="vertical" data-scroll-speed="-1.7" data-scroll-class="appear" data-scroll-repeat="true">
        <div className="hero_image_info">
            <div className="info_col">
            <h2>Location:</h2>
            <h2>Stavanger</h2>
            </div>
            <div className="info_col">
            <h2>House model:</h2>
            <h2>Fullview</h2>
            </div>
            <div className="info_col">
            <h2>Area:</h2>
            <h2>240 m²</h2>
            </div>
            
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
