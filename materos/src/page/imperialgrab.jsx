import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/imperialgrab.jpg'
import mate1 from '../img/mates/imperialgrab1.jpg'
import mate2 from '../img/mates/camiocinc2.jpg'
import Footer from '../component/footer';
function Imperialgrabado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} name="Imperial personalizado" desc="Si tu imperial liso ya era increible imaginate ahora que podes grabarle absolutamente personalizado a tu gusto, ahora es unico haciendo que en tu mate lleves lo que quieras, a quien quieras y como quieras"/>
        <Footer/>
        </>
    )
}
export default Imperialgrabado