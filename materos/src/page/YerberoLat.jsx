import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/accesorios/latas.jpg'
import mate1 from '../img/accesorios/latas1.jpg'
import mate2 from '../img/accesorios/latas2.jpg'
import Footer from '../component/footer';
function YerbLatas(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Yerbero y azucarero latitas" desc="Lleva tu yerba y azucar a todos lados con tu juego de latas forradas en cuerina que haciendo juego con tu canasta te permite brillar tanto como esos mates en el sol con quien mas quieras"/>
        <Footer/>
        </>
    )
}
export default YerbLatas