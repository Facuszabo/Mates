import '../css/compra.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { AiFillProfile } from "react-icons/ai";
import 'pure-react-carousel/dist/react-carousel.es.css';
function compra(props){
    return(
        <div className='compra'>
<CarouselProvider className='imgcompra'
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}>
        <Slider>
          <Slide index={0}><img className='imagecompra' src={props.image} /></Slide>
          <Slide index={1}><img className='imagecompra' src={props.image1} /></Slide>
          <Slide index={2}><img className='imagecompra' src={props.image2} /></Slide>
        </Slider>
        <ButtonBack className='botonback'>Back</ButtonBack>
        <ButtonNext className='botonnext'>Next</ButtonNext>
      </CarouselProvider>
    <div className='containercompra'>
    <p className="nombre">{props.name}</p>
    <div className='cajadescripcion'>
    <p className='titulodescripcion'>Descripcion del producto</p>
    <p className="descripcion" >{props.desc}</p>
    </div>
    </div>
    </div>
    )
}
export default compra