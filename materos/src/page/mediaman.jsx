import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function MediaManija(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Termo Media Manija" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default MediaManija