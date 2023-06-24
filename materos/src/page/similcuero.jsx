import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/canastas/simil.jpg'
import mate1 from '../img/canastas/simil1.jpg'
import mate2 from '../img/canastas/simil.jpg'
import Footer from '../component/footer';
function Similcuero(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2}name="Simil cuero" desc="¿Como vas a tener tu combo y no vas a tener donde llevarlo? Economica, preciosa y sobretodo util, te permite llevar de la mejor manera tu set "/>
        <Footer/>
        </>
    )
}
export default Similcuero