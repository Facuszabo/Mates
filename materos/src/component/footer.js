import logo from '../img/1.jpeg'
import {AiFillMail , AiFillFacebook,AiFillInstagram } from "react-icons/ai";
import american from '../img/american.png'
import cabal from '../img/cabal.png'
import maestro from '../img/maestro.png'
import master from '../img/mastercard.png'
import naranja from '../img/naranja.png'
import visa from '../img/visa.png'
import '../css/footer.css'
function footer(){
    return(
        <div className="footer">
        <div className="logred">
        <img className='imgfoot' src={logo}/>
        <div className='redes'> 
        <AiFillInstagram className='icon'/>
        <AiFillFacebook className='icon'/>
        <AiFillMail className='icon'/>
        </div>
        </div>
        <div className="secciones">
        <h className="textfoot">Secciones</h>
        <p className="textfoot">Accesorios</p>
        <p className="textfoot">Mates</p>
        <p className="textfoot">Canastas</p>
        <p className="textfoot">Termos</p>
        <p className="textfoot">Vasos termicos</p>
        </div>
        <div className="tarjetas">
        <h>Medios de pagos</h>
        <div className='opciones'>
        <img className='pay' src={visa}/>
        <img className='pay' src={naranja}/>
        <img className='pay' src={master}/>
        <img className='pay' src={maestro}/>
        <img className='pay' src={cabal}/>
        <img className='pay' src={american}/>
        </div>
        </div>
        </div>
    )
}
export default footer