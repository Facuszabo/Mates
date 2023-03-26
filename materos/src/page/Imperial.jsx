import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function ImperialLiso(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Imperial liso" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default ImperialLiso