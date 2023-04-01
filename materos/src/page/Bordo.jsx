import Nav from '../component/nav'
import Productos from '../component/compra'
import termo from '../img/termos/bordo3.jpg'
import termo1 from '../img/termos/bordo1.jpg'
import termo2 from '../img/termos/bordo2.jpg'
import Footer from '../component/footer';
function BordoMetalizado(){
    return(
        <>
        <Nav/>
        <Productos image={termo} image1={termo1} image2={termo2} name="Stanley Bordo metalizado 1,3Lt" desc="Con menor distancia entre sus paredes internas que garantiza mayor durabilidad.
Con tapón cebador.
Tapa que funciona como vaso.
A prueba de fugas.
Práctico y portable.
Termo que mantiene las bebidas calientes o frías 24hs 
8/8 acero inoxidable; naturalmente libre de BPA
Tapa con aislamiento térmicopara usar como taza
A prueba de fugas y práctico para cargar"/>
        <Footer/>
        </>
    )
}
export default BordoMetalizado