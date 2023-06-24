import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/mategrab.jpg'
import Footer from '../component/footer';
function Torpedograbado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Torpedo grabado" desc="¿Pensabas que solo haciamos grabados en virola? Y la respuesta era obio, NO, tambien podras personalizar tu torpedo a tu gusto para hacerlo tu mate ideal"/>
        <Footer/>
        </>
    )
}
export default Torpedograbado