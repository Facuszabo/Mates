import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function CamioneroCincelado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Camionero cincelado en alpaca" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default CamioneroCincelado