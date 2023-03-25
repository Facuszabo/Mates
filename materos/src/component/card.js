
import '../css/card.css'
function Card(props){
    return(
    <div className="card">
    <img className='image' src={props.image}></img>
    <p className="producto">{props.name}</p>
    </div>
    )
}
export default Card