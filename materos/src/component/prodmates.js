import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function ProductosMates(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/mates/camioneroaluminio"}><Card className="item" image={mate} name="Camionero aluminio"/></Link>
        <Link className="link" to={"/mates/camioneroacero"}><Card className="item" image={mate} name="Camionero acero"/></Link>
        <Link className="link" to={"/mates/camionerocincelado"}><Card className="item" image={mate} name="Camionero cincelado alpaca"/></Link>
        <Link className="link" to={"/mates/torpedoaluminio"}><Card className="item" image={mate} name="Torpedo aluminio"/></Link>
        <Link className="link" to={"/mates/torpedoaluminiocincelado"}><Card className="item" image={mate} name="Torpedo aluminio cincelado"/></Link>
        <Link className="link" to={"/mates/torpedoacero"}><Card className="item" image={mate} name="Torpedo acero"/></Link>
        <Link className="link" to={"/mates/torpedoalpaca"}><Card className="item" image={mate} name="Torpedo alpaca cincelado"/></Link>
        <Link className="link" to={"/mates/imperialliso"}><Card className="item" image={mate} name="Imperial alpaca liso"/></Link>
        <Link className="link" to={"/mates/imperialcincelado"}><Card className="item" image={mate} name="Imperial alpaca cincelaado"/></Link>
        <Link className="link" to={"/mates/imperialconpatitas"}><Card className="item" image={mate} name="Imperial alpaca liso con patitas alpaca macisa"/></Link>
        <Link className="link" to={"/mates/imperiallabrado"}><Card className="item" image={mate} name="Imperial cuero labrado con patitas alpaca macisa"/></Link>   
       </div>
        </body>
    )
}
export default ProductosMates