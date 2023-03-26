import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function ImperialCueroLabrado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Imperial cuero labrado con patitas alpaca macisa" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default ImperialCueroLabrado