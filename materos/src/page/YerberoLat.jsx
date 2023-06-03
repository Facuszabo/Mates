import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/accesorios/yerbero.jpg'
import Footer from '../component/footer';
function YerbLatas(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Yerbero y azucarero latitas" desc="Lleva tu yerba y azucar a todos lados con tu juego de latas forradas en cuerina que haciendo juego con tu canasta te permite brillar tanto como esos mates en el sol con quien mas quieras"/>
        <Footer/>
        </>
    )
}
export default YerbLatas