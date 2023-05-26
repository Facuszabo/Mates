import Card from './card';
import imperial from '../img/mates/imperialgrab.jpg'
import camionero from '../img/mates/camiograb.jpg'
import '../css/productos.css'
import { Link } from 'react-router-dom';

function ProductosGrabados(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/grabados/camionerograbado"}><Card className="item" image={camionero} name="Camionero acero grabado"/></Link>
        <Link className="link" to={"/grabados/imperialgrabado"}><Card className="item" image={imperial} name="Imperial grabado"/></Link>
        <Link className="link" to={"/grabados/torpedograbado"}><Card className="item" image={imperial} name="Torpedo cuero grabado"/></Link>
        <Link className="link" to={"/grabados/canastasgrabadas"}><Card className="item" image={imperial} name="Canastas grabadas"/></Link>
        </div>
        </body>
    )
}
export default ProductosGrabados