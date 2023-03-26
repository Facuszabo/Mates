import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function ProductosCanastas(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/canasta/simil"}><Card className="item" image={mate} name="Canasta simil cuero"/></Link>
        <Link className="link" to={"/termos/similmanijacuero"}><Card className="item" image={mate} name="Canasta simil cuero con manija de cuero"/></Link>
        <Link className="link" to={"/termos/cuero100%"}><Card className="item" image={mate} name="Canasta 100% cuero"/></Link>
       </div>
        </body>
    )
}
export default ProductosCanastas