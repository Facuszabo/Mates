import Nav from '../component/nav';
import Titulo from '../component/titulo';
import Productos from '../component/prodtermos';
import Footer from '../component/footer';
import '../css/productos.css'
function Termos(){
  return(
    <>
    <Nav/>
    <Titulo title="Termos"/>
    <Productos/>
    <Footer/>
    </>
  )
}
export default Termos;