import Card from './card';
import mate from '../img/4.png'
import grabado from '../img/vasos/grabado1.jpg'
import media from '../img/termos/media.jpg'
import polar from '../img/termos/blanco.jpg'
import cuero from '../img/canastas/cuero2.jpg'
import '../css/productos.css'
import { Link } from 'react-router-dom';
function productos(){
    return(
        <body>
        <div className="container">
        <Link className="link" to={"/grabados/camionerograbado"}><Card className="item" image={mate} name="Mate camionero grabado"/></Link>
        <Link className="link" to={"/mates/torpedoacero"}><Card className="item" image={mate} name="Mate torpedo acero"/></Link>
        <Link className="link" to={"/mates/imperialliso"}><Card className="item" image={mate} name="Mate Imperial"/></Link>
        <Link className="link" to={"/mates/imperialcincelado"}><Card className="item" image={mate} name="Mate Imperial cincelado"/></Link>
        <Link className="link" to={"/termos/polaradventure"}><Card className="item" image={polar} name="Termo Polar Adventure"/></Link>
        <Link className="link" to={"/termos/mediamanija"}><Card className="item" image={media} name="Termo media manija"/></Link>
        <Link className="link" to={"/vasos/personalizado"}><Card className="item" image={grabado} name="Vasos termicos grabados"/></Link>
        <Link className="link" to={"/termos/cuero100%"}><Card className="item" image={cuero} name="Canasta 100% cuero" /></Link>
        </div>
        </body>
    )
}
export default productos