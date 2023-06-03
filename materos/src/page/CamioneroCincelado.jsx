import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/camiocinc.jpg'
import mate1 from '../img/mates/camiocinc1.jpg'
import mate2 from '../img/mates/camiocinc2.jpg'
import Footer from '../component/footer';
function CamioneroCincelado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Camionero cincelado en alpaca" desc="Su virola delicada,tallado a mano y con cincelados artesanales que te permite resaltar del resto y hacer tu camionero inigualable"/>
        <Footer/>
        </>
    )
}
export default CamioneroCincelado