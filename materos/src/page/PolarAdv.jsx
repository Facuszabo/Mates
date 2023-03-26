import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function PolarAdv(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Stanley Polar Adventure 1Lt" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default PolarAdv