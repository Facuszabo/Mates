import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function Cuerograbado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Canastas simil o 100%cuero grabado" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default Cuerograbado