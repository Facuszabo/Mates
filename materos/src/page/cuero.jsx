import Nav from '../component/nav'
import Productos from '../component/compra'
import canasta from '../img/canastas/cuero3.jpg'
import canasta1 from '../img/canastas/cuero4.jpg'
import canasta2 from '../img/canastas/cuero2.jpg'
import Footer from '../component/footer';
function Cuero(){
    return(
        <>
        <Nav/>
        <Productos image={canasta} image1={canasta1} image2={canasta2} name="100% cuero" desc="Canasta confeccionada 100% cuero con altas costuras reforzadas para que tu canasta no sea tan solo la mas estetica sino que sea para toda la vida"/>
        <Footer/>
        </>
    )
}
export default Cuero