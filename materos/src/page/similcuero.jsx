import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function Similcuero(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Simil cuero" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default Similcuero