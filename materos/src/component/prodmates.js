import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
import labrado from '../img/mates/labrado.jpg'
import pelota from '../img/mates/pelota.jpg'
import cincelado from '../img/mates/cincelado.jpg'
import liso from '../img/mates/liso.jpg'
import camioacero from '../img/mates/camioacero.jpg'
import camioalum from '../img/mates/camioalum.jpg'
import camiocinc from '../img/mates/camiocinc.jpg'
import torpaluminio from '../img/mates/torpaluminio.jpg'
import torpacero from '../img/mates/torpacero.jpg'
import torpaluminiocinc from '../img/mates/torpaluminiocinc.jpg'
import torpcincelado from '../img/mates/torpcincelado.jpg'
import { Link } from 'react-router-dom';
function ProductosMates(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/mates/camioneroaluminio"}><Card className="item" image={camioalum} name="Camionero aluminio"/></Link>
        <Link className="link" to={"/mates/camioneroacero"}><Card className="item" image={camioacero} name="Camionero acero"/></Link>
        <Link className="link" to={"/mates/camionerocincelado"}><Card className="item" image={camiocinc} name="Camionero cincelado alpaca"/></Link>
        <Link className="link" to={"/mates/torpedoaluminio"}><Card className="item" image={torpaluminio} name="Torpedo aluminio"/></Link>
        <Link className="link" to={"/mates/torpedoaluminiocincelado"}><Card className="item" image={torpaluminiocinc} name="Torpedo aluminio cincelado"/></Link>
        <Link className="link" to={"/mates/torpedoacero"}><Card className="item" image={torpacero} name="Torpedo acero"/></Link>
        <Link className="link" to={"/mates/torpedoalpaca"}><Card className="item" image={torpcincelado} name="Torpedo alpaca cincelado"/></Link>
        <Link className="link" to={"/mates/imperialliso"}><Card className="item" image={liso} name="Imperial alpaca liso"/></Link>
        <Link className="link" to={"/mates/imperialcincelado"}><Card className="item" image={cincelado} name="Imperial alpaca cincelado"/></Link>
        <Link className="link" to={"/mates/imperialconpatitas"}><Card className="item" image={pelota} name="Imperial cuero tipo pelota con patitas alpaca macisa"/></Link>
        <Link className="link" to={"/mates/imperiallabrado"}><Card className="item" image={labrado} name="Imperial cuero labrado con patitas alpaca macisa"/></Link>   
       </div>
        </body>
    )
}
export default ProductosMates