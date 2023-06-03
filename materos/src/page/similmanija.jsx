import Nav from '../component/nav'
import Productos from '../component/compra'
import canasta from '../img/canastas/manijacuero.jpg'
import canasta1 from '../img/canastas/manijacuero1.jpg'
import canasta2 from '../img/canastas/manijacuero.jpg'
import Footer from '../component/footer';
function Simimanija(){
    return(
        <>
        <Nav/>
        <Productos image={canasta} image1={canasta1} image2={canasta2} name="Simil cuero con manija de cuero" desc="Economica, hermosa y para toda la vida. Describe un poco a este canasta con un cuerpo simil cuero
        con un detalle mas lindo que otro pero lo que mas destacamos de esta canasta es su manija en cuero que te permite cargar con tu juego con la seguridad y confianza que necesitamos"/>
        <Footer/>
        </>
    )
}
export default Simimanija