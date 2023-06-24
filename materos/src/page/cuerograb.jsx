import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/canastagrab.jpg'
import Footer from '../component/footer';
function Cuerograbado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Canastas simil o 100%cuero grabado" desc="lleva tu mate a todos lados y con el mejor estilo, siii vas a poder personalizar tu canasta como a vos te guste"/>
        <Footer/>
        </>
    )
}
export default Cuerograbado