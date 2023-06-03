import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/accesorios/cincelado.jpg'
import mate1 from '../img/accesorios/cincelado1.jpg'
import mate2 from '../img/accesorios/cincelado2.jpg'
import Footer from '../component/footer';
function BombLisa(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Bombilla Lisa de acero" desc="Con su cuerpo de acero liso y su pequeña curvatura en el pico loro le da su perfecto forma para tomar de la manera mas simple tu mate"/>
        <Footer/>
        </>
    )
}
export default BombLisa