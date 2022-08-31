import React from 'react';
import './projects.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";




function ProjectLanding() {
  return (
   
    <div className="projects__container">
      <div className="projects__col__left">
      <h1>Our Projects</h1>
      <p>We care about creating beautiful architecture,developing project that
            are individual,inspiring and enhancing the lifestyle of users. </p>
      <br></br>
      <p>Here you will find some of ours projects.</p>
      <button className="more__btn"><span className="text">Check More</span></button>
      </div>
      <div className="projects__col__right">
      <Swiper
        autoplay={{
        delay: 5500,
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
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    
      </div>
      
    </div>
  )
}

export default ProjectLanding
