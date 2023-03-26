import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function TorpedoAluminio(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Torpedo aluminio" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default TorpedoAluminio