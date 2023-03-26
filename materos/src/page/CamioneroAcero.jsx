import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function CamioneroAcero(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Camionero acero" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default CamioneroAcero