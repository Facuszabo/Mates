import '../css/cajaacces.css'
function CajaAcces(props){
    return(
    <>
    <img className='cajaimg' src={props.image}></img>
    <div className='movimiento'> 
    <p className='nombres'>{props.nombre}</p>
    </div>
    </>
    )
}
export default CajaAcces