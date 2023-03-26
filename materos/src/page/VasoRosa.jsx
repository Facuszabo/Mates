import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function Vasorosa(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Vaso termico rosa" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default Vasorosa