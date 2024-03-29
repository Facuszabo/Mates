import logo from '../img/logo.png'
import {AiFillMail , AiFillFacebook,AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import american from '../img/american.png'
import cabal from '../img/cabal.png'
import maestro from '../img/maestro.png'
import master from '../img/mastercard.png'
import naranja from '../img/naranja.png'
import visa from '../img/visa.png'
import mp from '../img/mercado.png'
import rapi from '../img/rapipago.png'
import '../css/footer.css'
function footer(){
    return(
        <div className="footer">
        <div className="logred">
        <img className='imgfoot' src={logo}/>
        <div className='redes'> 
        <a className='link' href='https://www.instagram.com/codigo_matero/'><AiFillInstagram className='icon'/></a>
        <AiFillMail className='icon'/>
        <a className='link' href='https://www.facebook.com/profile.php?id=100078627708582'><AiFillFacebook className='icon'/></a>
        </div>
        </div>
        <div className="tarjetas">
        <h className="textfoot">Medios de pagos</h>
        <div className='opciones'>
        <img className='pay' src={visa}/>
        <img className='pay' src={naranja}/>
        <img className='pay' src={master}/>
        <img className='pay' src={maestro}/>
        <img className='pay' src={cabal}/>
        <img className='pay' src={american}/>
        <img className='pay' src={mp}/>
        <img className='pay' src={rapi}/>
        </div>
        </div>
        </div>
    )
}
export default footer