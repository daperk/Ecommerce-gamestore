import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './gameSwiper.css';

import { Navigation, EffectCoverflow, Autoplay} from 'swiper/modules';


function GameSwiper() {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    navigation={true}
    loop={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
    }}
    // autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    // }}
    modules={[EffectCoverflow, Navigation, Autoplay]}
    className='gameSwipper'
    >

    </Swiper>
  )
}

export default GameSwiper;