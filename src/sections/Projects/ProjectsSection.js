import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper";
import {Link} from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './projectssection.css'







function ProjectLanding() {
  const n = 9;
  return (
   
    <div className="projects__container">
      <div className="projects__col__left">
      <h1>Our Projects</h1>
      <p>We care about creating beautiful architecture,developing project that
            are individual,inspiring and enhancing the lifestyle of users. </p>
      <br></br>
      <p>Here you will find some of ours projects.</p>
      <Link to="/projects">
      <button className="more__btn"><span className="text">Check More</span></button>
      </Link>
      </div>
      <div className="projects__col__right">
      <Swiper
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
        {[...Array(n)].map((e, i) =><SwiperSlide key={i} className="project__landing"></SwiperSlide>)}

      </Swiper>
    
      </div>
      
    </div>
  )
}

export default ProjectLanding
