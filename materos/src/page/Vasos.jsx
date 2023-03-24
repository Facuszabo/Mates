import Nav from '../component/nav';
import Titulo from '../component/titulo';
import Productos from '../component/prodvasos'
import Footer from '../component/footer';
function Vasos(){
  return(
    <>
    <Nav/>
    <Titulo title="Vasos Termicos"/>
    <Productos/>
    <Footer/>
    </>
  )
}
export default Vasos;