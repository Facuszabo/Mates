import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function TorpedoAlpaca(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Torpedo alpaca cincelada" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default TorpedoAlpaca