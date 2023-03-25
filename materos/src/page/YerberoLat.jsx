import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function YerbLatas(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Yerbero y azucarero latitas" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default YerbLatas