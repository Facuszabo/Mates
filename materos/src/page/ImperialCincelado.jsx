import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/cincelado.jpg'
import mate1 from '../img/mates/cincelado1.jpg'
import mate2 from '../img/mates/cincelado2.jpg'
import Footer from '../component/footer';
function ImperialCincelado(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Imperial cincelado" desc="Si buscabas distinguirte encontraste este mate imperial, si, asi es hasta el nombre te lo dice. Con una guarda tallada a mano, haciendo cada uno de sus diseños unicos y no solo su guarda, una virola tallada a mano que le otorga el toque ideal para acompañar a cada guarda"/>
        <Footer/>
        </>
    )
}
export default ImperialCincelado