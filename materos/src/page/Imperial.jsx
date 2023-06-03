import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/liso.jpg'
import mate1 from '../img/mates/liso.jpg'
import mate2 from '../img/mates/liso.jpg'
import Footer from '../component/footer';
function ImperialLiso(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Imperial liso" desc="Si buscabas distinguirte encontraste este mate imperial, si, asi es hasta el nombre te lo dice. Con una guarda tallada a mano, haciendo cada uno de sus diseños unicos y no solo su guarda, una virola lisa que le otorga el toque ideal para acompañar a cada guarda"/>
        <Footer/>
        </>
    )
}
export default ImperialLiso