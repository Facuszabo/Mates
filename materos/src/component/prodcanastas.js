import Card from './card';
import simil from '../img/canastas/simil.jpg'
import manijacuero from '../img/canastas/manijacuero1.jpg'
import cuero from '../img/canastas/cuero3.jpg'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function ProductosCanastas(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/canasta/simil"}><Card className="item" image={simil} name="Canasta simil cuero"/></Link>
        <Link className="link" to={"/canasta/similmanijacuero"}><Card className="item" image={manijacuero} name="Canasta simil cuero con manija de cuero"/></Link>
        <Link className="link" to={"/canasta/cuero"}><Card className="item" image={cuero} name="Canasta 100% cuero"/></Link>
       </div>
        </body>
    )
}
export default ProductosCanastas