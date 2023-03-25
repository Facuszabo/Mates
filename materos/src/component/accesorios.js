import termo from '../img/2.png'
import '../css/accesorios.css'
import { Link } from 'react-router-dom'
import CajaAcces from './cajaaccesorio'
function accesorios(){
    return(
        <div className="caja">
            <Link className="link" to={"/mates"}><CajaAcces image={termo}/></Link>
            <Link className="link" to={"/termos"}><CajaAcces image={termo}/></Link>
            <Link className="link" to={"/stanley"}><CajaAcces image={termo}/></Link>
            <Link className="link" to={"/accesorio"}><CajaAcces image={termo}/></Link>
            <Link className="link" to={"/canasta"}><CajaAcces image={termo}/></Link>
            <Link className="link" to={"/vasos"}><CajaAcces image={termo}/></Link>
            <br></br>
        </div>
        
    )
}
export default accesorios