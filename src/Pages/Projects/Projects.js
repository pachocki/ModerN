import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './projects.css'

function Projects() {
  return (
    <div>
    <Navbar/>
    <main className="projects__wrapper">
      <div className="projects__sidebar">
        <p>ModerN</p>
        <p>Projects</p>
      </div>
      <div className="projects__gallery">
      <Swiper style={{ width: '90%', height: '80vh' }} 
        autoplay={{
        delay: 8500,
        disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <div className="projects__slide">
        <SwiperSlide className="projects">
          <span className="project_nr">01</span>
          <h2>Project : Wood</h2>
        </SwiperSlide>
        </div>
        <div className="projects__slide">
        <SwiperSlide className="projects">
          <span className="project_nr">02</span>
          <h2>Project : Silver</h2>
        </SwiperSlide>

        </div>
        <div className="projects__slide">
        <SwiperSlide className="projects">
          <span className="project_nr">03</span>
          <h2>Project : Stone</h2>
        </SwiperSlide>
        </div>
        <div className="projects__slide">
        <SwiperSlide className="projects">
          <span className="project_nr">04</span>
          <h2>Project : Moor</h2>
        </SwiperSlide>
    
        </div>
        <div className="projects__slide">
        <SwiperSlide className="projects">
          <span className="project_nr">05</span>
          <h2>Project : Bronze</h2>
        </SwiperSlide>
        
        </div>
        <div className="projects__slide">
        <SwiperSlide className="projects">
          <span className="project_nr">06</span>
          <h2>Project : Gronser</h2>
        </SwiperSlide>
     
        </div>
  
        
      </Swiper>

      </div>

    </main>
    <Footer/>
    </div>
  )
}

export default Projects