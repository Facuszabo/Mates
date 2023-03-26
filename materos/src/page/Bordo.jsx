import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function BordoMetalizado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Stanley Bordo metalizado 1,3Lt" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default BordoMetalizado