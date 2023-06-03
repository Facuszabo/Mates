import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function Similcuero(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Simil cuero" desc="¿Como vas a tener tu combo y no vas a tener donde llevarlo? Economica, preciosa y sobretodo util, te permite llevar de la mejor manera tu set "/>
        <Footer/>
        </>
    )
}
export default Similcuero