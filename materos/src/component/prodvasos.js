import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function ProductosVasos(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/vasos/rosa"}><Card className="item" image={mate} name="Vaso termico liso rosa"/></Link>
        <Link className="link" to={"/vasos/blanco"}><Card className="item" image={mate} name="Vaso termico liso blanco"/></Link>
        <Link className="link" to={"/vasos/personalizado"}><Card className="item" image={mate} name="Vaso termico personalizado"/></Link>
       </div>
        </body>
    )
}
export default ProductosVasos