import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Autoplay } from "swiper/modules";
import "swiper/css";
import banner1 from '../assets/banner1-confort-store.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import home from '../modules/Home.module.css'

const BannerCarousel = () => {
  return (
    <>
    <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={1} loop={true} autoplay={{delay: 5000}}>

    <SwiperSlide>
    <img src={banner1} alt="Banner 1" className={home.banner_img}/>
    </SwiperSlide>
    <SwiperSlide >
        <img src={banner2} alt="Banner 2" className={home.banner_img} />
    </SwiperSlide>
    <SwiperSlide>
        <img src={banner3} alt="Banner 3" className={home.banner_img} />
    </SwiperSlide>
    </Swiper>
    </>
  )
}

export default BannerCarousel