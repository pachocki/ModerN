import React from 'react'
import './services.css'


function Services() {
  return (
    <div className="services__wrapper">
        <h1>Our Services</h1>
        <div className="services__container" data-scroll data-scroll-direction="vertical" data-scroll-speed="-1" data-scroll-class="appear" data-scroll-repeat="true">
            <div className="card__services">
                <div className="card__top__services">

                </div>
                <div className="card__bottom__services">
                    <h2>Architecture</h2>
                    <p>The heart and soul of what we provide. Our comprehensive architectural 
                        services include conceptual and schematic design.</p>
                </div>
            </div>
            <div className="card__services">
                <div className="card__top__services">

                </div>
                <div className="card__bottom__services">
                    <h2>Project Management</h2>
                    <p>The heart and soul of what we provide. Our comprehensive architectural 
                        services include conceptual and schematic design.</p>
                </div>
            </div>
            <div className="card__services">
                <div className="card__top__services">

                </div>
                <div className="card__bottom__services">
                    <h2>INTERIOR DESIGN</h2>
                    <p>The heart and soul of what we provide. Our comprehensive architectural 
                        services include conceptual and schematic design.</p>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Services