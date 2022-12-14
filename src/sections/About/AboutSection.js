import React from 'react'
import './aboutsection.css'
import video from '../../images/video.gif'

function AboutLanding() {
  return (
    <div className="about__container">
        <div className="top__introductions"  data-scroll data-scroll-direction="vertical" data-scroll-speed="-1.1" data-scroll-class="appear" data-scroll-repeat="true">
        <div className="introduction__col1">
        <h2>Who</h2>
        <h2>we are ?</h2>
        </div>
        <div className="introduction__col2">
            <p>We are interior design and architecture since 2012 , We helped thousands of our clients to realize their dream homes.
                We use advanced computer techniques to combine the client's vision , beauty of designed object and realistic look.
                We have also worked with 30 distributors to provide the goods we need.We can work on various type of projects that you want.
                Modern , industrial , minimalist,aesthetic and others we have mastered.
            </p>
        </div>
        </div>
        <div className="bottom__introductions">
            <div className="introduciton__image__col">
                <div className="card"  data-scroll data-scroll-direction="vertical" data-scroll-speed="-1" data-scroll-class="appear" data-scroll-repeat="true">

                </div>
              
            </div>
            <div className="introduciton__image__col">
            <img src={video} alt="my-gif"/>
            </div>
            <div className="introduciton__image__col">
            <div className="card__two"  data-scroll data-scroll-direction="vertical" data-scroll-speed="1.7" data-scroll-class="appear" data-scroll-repeat="true">
            </div>
            </div>

        </div>
    </div>
  )
}

export default AboutLanding