import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function Torpedograbado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Torpedo grabado" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default Torpedograbado