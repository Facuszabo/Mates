import '../css/compra.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import what from '../img/what.jpg'
import { AiOutlineWhatsApp } from "react-icons/ai";
function compra(props){
    return(
        <div className='compra'>
    <Swiper className='imgcompra'
      modules={[Navigation,EffectFade, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img src={props.image} className='imagecompra'/></SwiperSlide>
      <SwiperSlide><img src={props.image1} className='imagecompra'/></SwiperSlide>
      <SwiperSlide><img src={props.image2} className='imagecompra'/></SwiperSlide>
    </Swiper>
    <div className='containercompra'>
    <p className="nombre">{props.name}</p>
    <div className='cajadescripcion'>
    <p className='titulodescripcion'>Descripcion del producto</p>
    <p className="descripcion" >{props.desc}</p>
    </div>
    <hr></hr>
    <div className='whatsapp'>
    <a className='link' href='https://wa.me/+5493813398623'><AiOutlineWhatsApp className='iconwp'/></a>
    <p className='textwp'>Para tu compra comunicate con nosotros atravez de este link a WhatsApp</p>
    </div>
    </div>
    </div>
    )
}
export default compra