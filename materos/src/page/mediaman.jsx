import Nav from '../component/nav'
import Productos from '../component/compra'
import termo from '../img/termos/media.jpg'
import termo1 from '../img/termos/media1.jpg'
import termo2 from '../img/termos/media2.jpg'
import Footer from '../component/footer';
function MediaManija(){
    return(
        <>
        <Nav/>
        <Productos  image={termo} image1={termo1} image2={termo2} name="Termo Media Manija" desc="Practico, util, perfecto para llevar a cualquier lado y mantener tu agua caliente por 12 hrs, y no solo eso. Con doble pared aislante, pico cebador y facil de mover de un lado a lado es tu compañero ideal para la facultad, trabajo o viajes"/>
        <Footer/>
        </>
    )
}
export default MediaManija