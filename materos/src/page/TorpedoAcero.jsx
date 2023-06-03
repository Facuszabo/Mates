import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/torpacero.jpg'
import mate1 from '../img/mates/torpacero1.jpg'
import mate2 from '../img/mates/torpacero2.jpg'
import Footer from '../component/footer';
function TorpedoAcero(){
    return(
        <>
        <Nav/>
        <Productos  image={mate} image1={mate1} image2={mate2} name="Torpedo acero" desc="Un torpedo único, ya que nuestros productos son realizados de manera artesanal, distinguiéndose cada mate del resto. Con sus patitas reforzadas y un acabado perfecto con su virola de acero le da un toque distinguido y permitiendote personalizar al mate de tu sueño."/>
        <Footer/>
        </>
    )
}
export default TorpedoAcero