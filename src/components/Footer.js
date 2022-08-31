import React from 'react'
import './footer.css'
import Logo from '../images/logo.png'
import {BsArrowDownRight} from 'react-icons/bs'
function Footer() {
  
  return (
    <div className="footer" data-scroll data-scroll-direction="vertical" data-scroll-speed="-3" data-scroll-class="appear" data-scroll-repeat="true">
      <div className="footer__col">
      <h2>Adress:</h2>
      <p>Stavanger</p>
      <p>Kongesgata 32</p>
      </div>
      <div className="footer__col">
        <h2>Contact:</h2>
     
        <p>ModerN@gmail.com <BsArrowDownRight/></p>
        <p>Mobile:96849123</p>
      
      </div>
      <div className="footer__col">
        <div className="footer__logo">
            <img src={Logo} alt="logo"/>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
