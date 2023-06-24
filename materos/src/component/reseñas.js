import React from 'react';
import '../css/reseñas.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/slider.css'
import slider from '../img/paisaje.jpg'
import slider1 from '../img/paisaje1.jpg'
import slider2 from '../img/paisaje2.jpg'
function MensajesClientes(props) {
 return(
  <section className='reseña'>
  <Swiper className='imgres'
  modules={[Navigation,EffectFade, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  effect="fade"
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
>
  <SwiperSlide><img src={slider} className='imageslider'/></SwiperSlide>
  <SwiperSlide><img src={slider1} className='imageslider'/></SwiperSlide>
  <SwiperSlide><img src={slider2} className='imageslider'/></SwiperSlide>
</Swiper>
<br></br>
</section>
 )
}

export default MensajesClientes;