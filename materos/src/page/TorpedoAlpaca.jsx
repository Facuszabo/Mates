import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/torpcincelado.jpg'
import mate1 from '../img/mates/torpcincelado1.jpg'
import mate2 from '../img/mates/torpcincelado2.jpg'
import Footer from '../component/footer';
function TorpedoAlpaca(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Torpedo alpaca cincelada" desc="Su virola delicada,tallado a mano y con cincelados artesanales que te permite resaltar del resto y hacer tu torpedo inigualable"/>
        <Footer/>
        </>
    )
}
export default TorpedoAlpaca