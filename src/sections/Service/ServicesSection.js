import React from 'react'
import './servicessection.css'
import content from '../../cardcontent'
import Card from '../../components/Cards'


function Services() {
  return (
    <div className="services__wrapper">
        <h1>Our Services</h1>
        <div className="services__container" data-scroll data-scroll-direction="vertical" data-scroll-speed="-1" data-scroll-class="appear" data-scroll-repeat="true">
            
                {content.map((item,index)=>(
                     <Card key={index} item={item}/>
                 ))}
                </div>
        </div>
        

   
  )
}

export default Services