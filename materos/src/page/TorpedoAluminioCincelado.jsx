import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function TorpedoAluminioCincelado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Torpedo aluminio cincelado" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default TorpedoAluminioCincelado