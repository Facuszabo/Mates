import termo from '../img/2.png'
import '../css/accesorios.css'

function accesorios(){
    return(
        <div className="contenedor">
            <card className="accesorios">
                <img className='img' src={termo}/>
            </card>
            <card className="accesorios">
                <img className='img' src={termo}/>
            </card>
            <card className="accesorios">
                <img className='img' src={termo}/>
            </card>
            <card className="accesorios">
                <img className='img' src={termo}/>
            </card>
            <card className="accesorios">
                <img className='img' src={termo}/>
            </card>
            <card className="accesorios">
                <img className='img' src={termo}/>
            </card>
        </div>
    )
}
export default accesorios