import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
function ProductosCanastas(){
    return(
        <body>
        <div className="container">
        <Card className="item" image={mate} name="Canasta simil cuero"/>
        <Card className="item" image={mate} name="Canasta simil cuero con manija de cuero"/>
        <Card className="item" image={mate} name="Canasta 100% cuero"/>
       </div>
        </body>
    )
}
export default ProductosCanastas