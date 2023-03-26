import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function CamioneroAluminio(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Camionero aluminio" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default CamioneroAluminio