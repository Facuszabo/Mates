import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/torpaluminiocinc.jpg'
import mate1 from '../img/mates/torpaluminiocinc1.jpg'
import mate2 from '../img/mates/torpaluminiocinc2.jpg'
import Footer from '../component/footer';
function TorpedoAluminioCincelado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Torpedo aluminio cincelado" desc="Su virola delicada,tallado a mano y con cincelados artesanales que te permite resaltar del resto y hacer tu torpedo inigualable a un precio unico por su virola de aluminio"/>
        <Footer/>
        </>
    )
}
export default TorpedoAluminioCincelado