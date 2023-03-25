import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
function ProductosGrabados(){
    return(
        <body>
        <div className="container">
        <Card className="item" image={mate} name="Camionero acero grabado"/> 
        <Card className="item" image={mate} name="Imperial grabado"/> 
        <Card className="item" image={mate} name="Torpedo cuero grabado"/> 
        <Card className="item" image={mate} name="Canastas grabadas"/> 
        </div>
        </body>
    )
}
export default ProductosGrabados