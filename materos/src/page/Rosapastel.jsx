import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/4.png'
import Footer from '../component/footer';
function RosaPastel(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Stanley Rosa pastel 1,3Lt" desc="fyvsguicboihan"/>
        <Footer/>
        </>
    )
}
export default RosaPastel