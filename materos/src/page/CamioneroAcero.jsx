import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/camioacero.jpg'
import mate1 from '../img/mates/camioacero1.jpg'
import mate2 from '../img/mates/camioacero2.jpg'
import Footer from '../component/footer';
function CamioneroAcero(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Camionero acero" desc="Un camionero único, ya que nuestros productos son realizados de manera artesanal, distinguiéndose cada mate del resto. Con sus patitas reforzadas y un acabado perfecto con su virola de acero le da un toque distinguido y permitiendote personalizar al mate de tu sueño."/>
        <Footer/>
        </>
    )
}
export default CamioneroAcero