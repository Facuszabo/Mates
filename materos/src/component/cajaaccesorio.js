import '../css/cajaacces.css'
function CajaAcces(props){
    return(
    <>
    <img className='imagen' src={props.image}></img>
    <p className='nombres'>{props.nombre}</p>
    </>
    )
}
export default CajaAcces