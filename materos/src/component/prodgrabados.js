import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
import { Link } from 'react-router-dom';

function ProductosGrabados(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/grabados/camionerograbado"}><Card className="item" image={mate} name="Camionero acero grabado"/></Link>
        <Link className="link" to={"/grabados/imperialgrabado"}><Card className="item" image={mate} name="Imperial grabado"/></Link>
        <Link className="link" to={"/grabados/torpedograbado"}><Card className="item" image={mate} name="Torpedo cuero grabado"/></Link>
        <Link className="link" to={"/grabados/canastasgrabadas"}><Card className="item" image={mate} name="Canastas grabadas"/></Link>
        </div>
        </body>
    )
}
export default ProductosGrabados