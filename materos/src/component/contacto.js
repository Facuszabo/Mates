import {IoLogoWhatsapp, IoLogoInstagram,IoLogoFacebook} from "react-icons/io";
import '../css/contacto.css';
function contacto(){
    return(
        <div className="contenedorcontac">
         <div className="cajacontac">
         <IoLogoWhatsapp className="icono"/>
         <h1 className="textos">Whatsapp</h1>
         <text className="textos">Contactanos para cualquier consulta, dudas o recomendacion estamos a tu disposicion</text>
         </div>   
         <div className="cajacontac">
         <IoLogoInstagram className="icono"/>
         <h1 className="textos">Instagram</h1>
         <text className="textos">Contactanos para cualquier consulta, dudas o recomendacion estamos a tu disposicion</text>
         </div> 
         <div className="cajacontac">
         <IoLogoFacebook className="icono"/>
         <h1 className="textos">Facebook</h1>
         <text className="textos">Contactanos para cualquier consulta, dudas o recomendacion estamos a tu disposicion</text>
         </div> 
        </div>
    )
}
export default contacto