import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/slider.css'
import primera from '../img/slider.png'
import seg from '../img/slider2.png'
import terc from '../img/slider3.png'
function Slider(){
  return (
    <section id='body'>
  <Swiper className='slider'
      modules={[Navigation,EffectFade, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img src={primera} className='imageslider'/></SwiperSlide>
      <SwiperSlide><img src={seg} className='imageslider'/></SwiperSlide>
      <SwiperSlide><img src={terc} className='imageslider'/></SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Slider;