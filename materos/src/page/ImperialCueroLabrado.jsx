import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/labrado.jpg'
import mate1 from '../img/mates/labrado1.jpg'
import mate2 from '../img/mates/labrado2.jpg'
import Footer from '../component/footer';
function ImperialCueroLabrado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Imperial cuero labrado con patitas alpaca macisa" desc="Describilo vos porque yo no puedo... Realmente increible, con un cuero trabajado a mano que le otorga un sello distintivo a tu mate, y no solo eso. Sino mira sus patitas de alpacas macisas con pequeños pero sutiles flejes como si fuera una virola"/>
        <Footer/>
        </>
    )
}
export default ImperialCueroLabrado