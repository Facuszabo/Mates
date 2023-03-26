import {IoLogoWhatsapp, IoLogoInstagram,IoLogoFacebook} from "react-icons/io";
import '../css/contacto.css';
function contacto(){
    return(
        <div className="contenedorcontac">
         <a className='link' href=""><div className="cajacontac">
         <IoLogoWhatsapp className="icono"/>
         <h1 className="textos">Whatsapp</h1>
         <text className="textos">Contactanos para cualquier consulta, dudas o recomendacion estamos a tu disposicion</text>
         </div></a> 
         <a className='link' href="https://www.instagram.com/codigo_matero/"><div className="cajacontac">
         <IoLogoInstagram className="icono"/>
         <h1 className="textos">Instagram</h1>
         <text className="textos">Contactanos para cualquier consulta, dudas o recomendacion estamos a tu disposicion</text>
         </div></a>
         <a className='link' href="https://www.facebook.com/profile.php?id=100078627708582"><div className="cajacontac">
         <IoLogoFacebook className="icono"/>
         <h1 className="textos">Facebook</h1>
         <text className="textos">Contactanos para cualquier consulta, dudas o recomendacion estamos a tu disposicion</text>
         </div></a>
        </div>
    )
}
export default contacto