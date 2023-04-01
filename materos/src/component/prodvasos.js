import Card from './card';
import blanco from '../img/vasos/blanco1.jpg'
import rosa from '../img/vasos/rosa1.jpg'
import grabado from '../img/vasos/grabado1.jpg'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function ProductosVasos(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/vasos/rosa"}><Card className="item" image={rosa} name="Vaso termico liso rosa"/></Link>
        <Link className="link" to={"/vasos/blanco"}><Card className="item" image={blanco} name="Vaso termico liso blanco"/></Link>
        <Link className="link" to={"/vasos/personalizado"}><Card className="item" image={grabado} name="Vaso termico personalizado"/></Link>
       </div>
        </body>
    )
}
export default ProductosVasos