import Nav from '../component/nav';
import Titulo from '../component/titulo';
import Productos from '../component/prodaccesorios'
import Footer from '../component/footer';
function Accesorios(){
  return(
    <>
    <Nav/>
    <Titulo title="Accesorios"/>
    <Productos/>
    <Footer/>
    </>
  )
}
export default Accesorios;