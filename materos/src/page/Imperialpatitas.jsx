import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/pelota.jpg'
import mate1 from '../img/mates/pelota1.jpg'
import mate2 from '../img/mates/pelota2.jpg'
import Footer from '../component/footer';
function ImperialPatitas(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Imperial liso con patitas alpaca macisa" desc="Sin palabras... si son futboleros tenes todo lo que podes pedir en este mate. El cuero se encuentra trabajado para replicar una pelota de futbol y no solo eso... en sus patitas tenes guarda con patitas de alpaca macisa, ¿algo mas podes pedir?Si, fleje trabajado de manera artesanal y una virola lisa para terminar de personalizarlo a tu gusto"/>
        <Footer/>
        </>
    )
}
export default ImperialPatitas