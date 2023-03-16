import '../css/card.css'
function Card(props){
    return(
    <div className="card">
    <img className='image' src={props.image}></img>
    <p className="producto">{props.name}</p>
    <p className='precio'>{props.precio}</p>
    <p className="tarjeta">{props.text}</p>
    <p className='precio contado'>{props.precio2}</p>
    <p className="tarjeta">{props.text2}</p>
    </div>
    )
}
export default Card