import React from 'react'
import './servicessection.css'


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
                    <p>The services that an architect typically provides include concept design 
                        development, preparation of construction documents, and construction administration. Architects also provide 
                        a wide variety of additional services including feasibility studies, architectural programming and project management.</p>
                </div>
            </div>
            <div className="card__services">
                <div className="card__top__services">

                </div>
                <div className="card__bottom__services">
                    <h2>Project Management</h2>
                    <p>Our project management services cover the whole project, from inception to completion. We treat each project
                         as unique and we maintain momentum, which we see as two of the keys to project success. 
                        Ramboll helps clients to maintain control of every aspect — quality, cost, programme, delivery and safety.</p>
                </div>
            </div>
            <div className="card__services">
                <div className="card__top__services">

                </div>
                <div className="card__bottom__services">
                    <h2>INTERIOR DESIGN</h2>
                    <p>We give full service interior design firm that offers design and decorating 
                        solutions to residential and small scale commercial projects. We offer interior design and decorating services in the whole Norway </p>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Services