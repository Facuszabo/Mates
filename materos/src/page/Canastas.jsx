import Nav from '../component/nav';
import Titulo from '../component/titulo';
import Productos from '../component/prodcanastas';
import Footer from '../component/footer';
function Canastas(){
  return(
    <>
    <Nav/>
    <Titulo title="Canastas"/>
    <Productos/>
    <Footer/>
    </>
  )
}
export default Canastas;