import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/accesorios/despolvillador.jpg'
import Footer from '../component/footer';
function Despolvillador(){
    return(
        <>
        <Nav/>
        <Productos image={mate} name="Despolvillador" desc="Un accesorio tan util como poco conocido, te permite separar el polvo de la yerba de esta manera logrando bajar la acidez para obtener un mate mucho mas liviano y rico"/>
        <Footer/>
        </>
    )
}
export default Despolvillador