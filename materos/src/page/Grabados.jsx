import Nav from '../component/nav';
import Titulo from '../component/titulo';
import Productos from '../component/prodgrabados'
import Footer from '../component/footer';
function Grabados(){
  return(
    <>
    <Nav/>
    <Titulo title="Grabados"/>
    <Productos/>
    <Footer/>
    </>
  )
}
export default Grabados;