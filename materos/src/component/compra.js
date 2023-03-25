import '../css/compra.css'
function compra(props){
    return(
    <div className='compra'>
    <img className='imgcompra' src={props.image}></img>
    <div className='containercompra'>
    <p className="nombre">{props.name}</p>
    <p className="descripcion">{props.desc}</p>
    </div>
    </div>
    )
}
export default compra