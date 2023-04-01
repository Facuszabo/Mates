import Nav from '../component/nav'
import Productos from '../component/compra'
import vaso from '../img/vasos/grabado1.jpg'
import vaso1 from '../img/vasos/vaso.jpg'
import vaso2 from '../img/vasos/grabado.jpg'
import Footer from '../component/footer';
function Vasograbado(){
    return(
        <>
        <Nav/>
        <Productos image={vaso} image1={vaso1} image2={vaso2} name="Vaso termico personalizado" desc="Te acompaña en tus tardes de trabajo, estudios o viajes. Porque si queres tener tu cafe caliente lo hace, porque si queres mantener tu bebida fresca lo hara. No hay mejor compañia para tus largas jornadas que este vaso termico, con una delicadez, funcionalidad y sorbete que te permite disfrutar de tu bebida de la manera mas comoda.
        No solo te brindamos la funcionalidad de este vaso sino te permitimos hacerlo unico un diseño 100% personalizado a tu gusto, imagenes, frases, logos, lo que sueñes lo hacemos realidad"/>
        <Footer/>
        </>
    )
}
export default Vasograbado