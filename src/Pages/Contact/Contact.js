import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './contact.css'




function Contact() {
  

   
  return (
    <div>
      <Navbar/>
      <div className="contact__parallax">
      </div>
      <div className="contact__container">
      <div className="contact__info">
      <h1 className="contact__title">Contact</h1>
        <h2>Adress:Stavanger</h2>
        <h2>Kongsgata 32</h2>
        <h2>4012 Stavanger</h2>
        <h2>Mobil:96745321</h2>
        <h2>ModerN@gmail.com</h2>
      </div>
      <div className="office__image"></div>
      </div>
      <div className="contact__map">
      <iframe
              title="home"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.3742901910284!2d5.7344873583652145!3d58.96916477806094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a35363111b05d%3A0x515e1df120e57b8a!2sKongsgata%2020%2C%204012%20Stavanger!5e0!3m2!1spl!2sno!4v1662589167072!5m2!1spl!2sno" 
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
     </div>
    <Footer/>
    </div>
    
   
  )
 
}

export default Contact