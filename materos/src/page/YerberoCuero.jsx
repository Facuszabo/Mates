import Nav from '../component/nav'
import Productos from '../component/compra'
import yerbero from '../img/accesorios/sobre.jpg'
import yerbero1 from '../img/accesorios/sobre1.jpg'
import yerbero2 from '../img/accesorios/sobre2.jpg'
import Footer from '../component/footer';
function YerbSimil(){
    return(
        <>
        <Nav/>
        <Productos image={yerbero} image1={yerbero1} image2={yerbero2} name="Yerbero y azucarero simil cuero" desc="¿Tenes tu juego matero? no te puede faltar este set de yerbero/azucarero forrado en simil cuero con una costura de alta calidad que llego para ser parte de toda tu vida, en el exterior simil que deja toda la facha del mundo pero por dentro forrada en plastico que te permite mantener tu yerba y azucar fresca"/>
        <Footer/>
        </>
    )
}
export default YerbSimil