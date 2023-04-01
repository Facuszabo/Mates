import Nav from '../component/nav'
import Productos from '../component/compra'
import negro from '../img/termos/negro.jpg'
import negro1 from '../img/termos/negro1.jpg'
import negro2 from '../img/termos/negro2.jpg'
import Footer from '../component/footer';
function PolarAdvBlack(){
    return(
        <>
        <Nav/>
        <Productos image={negro} image1={negro1} image2={negro2} name="Stanley Polar Adventure Black 1Lt" desc="Con menor distancia entre sus paredes internas que garantiza mayor durabilidad.
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
export default PolarAdvBlack