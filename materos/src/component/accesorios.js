import mate from '../img/mates/principal.jpg'
import canasta from '../img/mates/principal1.jpeg'
import accesorio from '../img/mates/accesorio.jpg'
import termo from '../img/mates/principal2.jpeg'
import grabado from '../img/vasos/grabado1.jpg'
import stanley from '../img/mates/principal3.jpeg'
import '../css/accesorios.css'
import { Link } from 'react-router-dom'
import CajaAcces from './cajaaccesorio'
function accesorios(){
    return(
        <div className="cajon">
            <Link className="link cajaaccesorio" to={"/mates"}><CajaAcces image={mate} nombre="Mates"/></Link>
            <Link className="link cajaaccesorio" to={"/termos"}><CajaAcces image={termo} nombre="Termos"/></Link>
            <Link className="link cajaaccesorio" to={"/grabados"}><CajaAcces image={stanley} nombre="Grabados"/></Link>
            <Link className="link cajaaccesorio" to={"/accesorio"}><CajaAcces image={accesorio} nombre="Accesorios"/></Link>
            <Link className="link cajaaccesorio" to={"/canasta"}><CajaAcces image={canasta} nombre="Canasta"/></Link>
            <Link className="link cajaaccesorio" to={"/vasos"}><CajaAcces image={grabado} nombre="Vasos"/></Link>
            <br></br>
        </div>
        
    )
}
export default accesorios