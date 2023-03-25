import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function BombCinc(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Bombilla Cincelada de acero" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default BombCinc