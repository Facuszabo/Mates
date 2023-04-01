import Card from './card';
import blanco from '../img/termos/blanco.jpg'
import bordo from '../img/termos/bordo1.jpg'
import rosamet from '../img/termos/rosa3.jpg'
import rosapas from '../img/termos/rosa1.jpg'
import media from '../img/termos/media.jpg'
import negro from '../img/termos/negro.jpg'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function ProductosTermos(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/termos/polaradventure"}><Card className="item" image={blanco} name="Polar Adventure 1lt"/></Link>
        <Link className="link" to={"/termos/polaradventureblack"}><Card className="item" image={negro} name="Polar Adventure black 1lt"/></Link>
        <Link className="link" to={"/termos/bordometalizado"}><Card className="item" image={bordo} name="Bordo metalizado 1,3lt"/></Link>
        <Link className="link" to={"/termos/rosametalizado"}><Card className="item" image={rosamet} name="Rosa metalizado 1,3lt"/></Link>
        <Link className="link" to={"/termos/rosapastel"}><Card className="item" image={rosapas} name="Rosa pastel 1,3lt"/></Link>
        <Link className="link" to={"/termos/mediamanija"}><Card className="item" image={media} name="Termo media manija 1lt"/> </Link>
       </div>
        </body>
    )
}
export default ProductosTermos