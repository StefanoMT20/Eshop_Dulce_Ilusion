import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../styles.css';

function Hero() {
    return (
        <div className="grid grid-flow-co auto-cols-auto justify-center items-center">
         <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
          <div className="a">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe aut dicta rerum velit odit veniam dolorem eum magni provident quas suscipit, explicabo dolore! Temporibus maiores vitae modi. Sit labore adipisci quo incidunt corporis facere voluptates deleniti. Impedit esse, tempora, veritatis hic, facilis ratione architecto sint autem doloremque cumque voluptatibus.
          </div>
          
        </div>
    )
}

export default Hero

