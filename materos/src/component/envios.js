import { FaTelegramPlane, FaMoneyCheckAlt, FaCcVisa} from 'react-icons/fa'
import "../css/envios.css"
function envios(){
    return(
        <section id='body'>
        <div className="contenedor">
        <div className='envios'>
        <FaTelegramPlane className="iconos"/>  
        <p className='pagos'>Envios a todo el pais</p>
        </div>
        <div className='Tarjeta'>
        <FaCcVisa className="iconos"/>
        <p className='pagos'>Todos los medios de pagos</p> 
        </div>
        <div className='efectivo'>
        <FaMoneyCheckAlt className="iconos"/>  
        <p className='pagos'>10% abonando en efectivo y transferencias</p>
        </div>
        </div>
        </section>
        )
         
}
export default envios