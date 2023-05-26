import Card from './card';
import yerbero from '../img/accesorios/yerbero.jpg'
import sobre from '../img/accesorios/sobre1.jpg'
import despol from '../img/accesorios/despolvillador.jpg'
import cincelado from '../img/accesorios/cincelado.jpg'
import lisa from '../img/accesorios/liso.jpg'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function ProductosAccesorios(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/accesorio/despolvillador"}><Card className="item" image={despol} name="Despolvillador"></Card></Link>
        <Link className="link" to={"/accesorio/yerberolatas"}><Card className="item" image={yerbero} name="Yerbero/Azucarero en latitas"></Card></Link>
        <Link className="link" to={"/accesorio/yerberosimil"}><Card className="item" image={sobre} name="Yerbero/Azucarero simil cuero"></Card></Link>
        <Link className="link" to={"/accesorio/bombillacincelada"}><Card className="item" image={cincelado} name="Bombilla cincelada en acero"></Card></Link>
        <Link className="link" to={"/accesorio/bombillalisa"}><Card className="item" image={lisa} name="Bombilla lisa en acero"></Card></Link>
       </div>
        </body>
    )
}
export default ProductosAccesorios