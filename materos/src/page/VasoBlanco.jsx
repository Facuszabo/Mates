import Nav from '../component/nav'
import Productos from '../component/compra'
import vaso from '../img/vasos/blanco.jpg'
import vaso1 from '../img/vasos/vaso.jpg'
import vaso2 from '../img/vasos/blanco1.jpg'
import Footer from '../component/footer';
function Vasoblanco(){
    return(
        <>
        <Nav/>
        <Productos image={vaso} image1={vaso1} image2={vaso2} name="Vaso termico blanco" desc="Te acompaña en tus tardes de trabajo, estudios o viajes. Porque si queres tener tu cafe caliente lo hace, porque si queres mantener tu bebida fresca lo hara. No hay mejor compañia para tus largas jornadas que este vaso termico, con una delicadez, funcionalidad y sorbete que te permite disfrutar de tu bebida de la manera mas comoda"/>
        <Footer/>
        </>
    )
}
export default Vasoblanco