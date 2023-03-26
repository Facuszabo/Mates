import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function Cuero(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="100% cuero" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default Cuero