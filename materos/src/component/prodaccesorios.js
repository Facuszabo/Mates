import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
function ProductosAccesorios(){
    return(
        <body>
        <div className="container">
        <Card className="item" image={mate} name="Despolvillador"/>
        <Card className="item" image={mate} name="Yerbero/azucarero forrado simil cuero"/>
        <Card className="item" image={mate} name="Yerbero/azucarero latitas"/>
        <Card className="item" image={mate} name="Bombilla acero lisa"/>
        <Card className="item" image={mate} name="Bombilla acero cincelado"/>
       </div>
        </body>
    )
}
export default ProductosAccesorios