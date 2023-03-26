import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function ProductosTermos(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/termos/polaradventure"}><Card className="item" image={mate} name="Polar Adventure 1lt"/></Link>
        <Link className="link" to={"/termos/polaradventureblack"}><Card className="item" image={mate} name="Polar Adventure black 1lt"/></Link>
        <Link className="link" to={"/termos/bordometalizado"}><Card className="item" image={mate} name="Bordo metalizado 1,3lt"/></Link>
        <Link className="link" to={"/termos/rosametalizado"}><Card className="item" image={mate} name="Rosa metalizado 1,3lt"/></Link>
        <Link className="link" to={"/termos/rosapastel"}><Card className="item" image={mate} name="Rosa pastel 1,3lt"/></Link>
        <Link className="link" to={"/termos/mediamanija"}><Card className="item" image={mate} name="Termo media manija 1lt"/> </Link>
       </div>
        </body>
    )
}
export default ProductosTermos