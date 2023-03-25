import Nav from '../component/nav';
import Titulo from '../component/titulo';
import Contacto from '../component/contacto'
import Footer from '../component/footer';
function PagContacto(){
  return(
    <>
    <Nav/>
    <Titulo title="Contacto"/>
    <Contacto/>
    <Footer/>
    </>
  )
}
export default PagContacto;