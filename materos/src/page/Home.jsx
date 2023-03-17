import Nav from '../component/nav';
import Slider from '../component/slider';
import Envios from '../component/envios';
import Titulo from '../component/titulo';
import Productos from '../component/productos';
import Accesorios from '../component/accesorios';

function Home(){
  return(
    <>
    <Nav/>
    <Slider/>
    <Envios/>
    <Titulo title="Productos destacados"/>
    <Productos/>
    <Accesorios/>
    </>
  )
}
export default Home;