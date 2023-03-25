import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function Despolvillador(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Despolvillador" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default Despolvillador