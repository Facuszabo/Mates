import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
function ProductosMates(){
    return(
        <body>
        <div className="container">
        <Card className="item" image={mate} name="Camionero aluminio"/>
        <Card className="item" image={mate} name="Camionero acero"/>
        <Card className="item" image={mate} name="Camionero cincelado alpaca"/>
        <Card className="item" image={mate} name="Torpedo aluminio"/>
        <Card className="item" image={mate} name="Torpedo aluminio cincelado"/>
        <Card className="item" image={mate} name="Torpedo acero"/>
        <Card className="item" image={mate} name="Torpedo alpaca cincelado"/>
        <Card className="item" image={mate} name="Imperial alpaca liso"/>
        <Card className="item" image={mate} name="Imperial alpaca cincelaado"/>
        <Card className="item" image={mate} name="Imperial alpaca liso con patitas alpaca macisa"/>
        <Card className="item" image={mate} name="Imperial cuero labrado con patitas alpaca macisa"/>        
       </div>
        </body>
    )
}
export default ProductosMates