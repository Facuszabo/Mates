import Nav from '../component/nav';
import Titulo from '../component/titulo';
import Card from '../component/card';
import Footer from '../component/footer';
import mate from '../img/4.png'
import '../css/productos.css'
function Termos(){
  return(
    <>
    <Nav/>
    <Titulo title="Termos"/>
    <Card className="item" image={mate} name="Termo media manija 1lt"/> 
    <Footer/>
    </>
  )
}
export default Termos;