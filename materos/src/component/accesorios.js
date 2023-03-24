import termo from '../img/2.png'
import '../css/accesorios.css'
import { Link } from 'react-router-dom'

function accesorios(){
    return(
        <div className="caja">
            <Link className="link" to={"/mates"}><card className="accesorios">
                <img className='img' src={termo}/>
            </card></Link>
            <Link className="link" to={"/termos"}><card className="accesorios">
                <img className='img' src={termo}/>
            </card></Link>
            <Link className="link" to={"/stanley"}><card className="accesorios">
                <img className='img' src={termo}/>
            </card></Link>
            <Link className="link" to={"/accesorio"}><card className="accesorios">
                <img className='img' src={termo}/>
            </card></Link>
            <Link className="link" to={"/canasta"}><card className="accesorios">
                <img className='img' src={termo}/>
            </card></Link>
            <Link className="link" to={"/vasos"}><card className="accesorios">
                <img className='img' src={termo}/>
            </card></Link>
            <br></br>
        </div>
        
    )
}
export default accesorios