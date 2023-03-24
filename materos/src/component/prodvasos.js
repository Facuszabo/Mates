import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
function ProductosVasos(){
    return(
        <body>
        <div className="container">
        <Card className="item" image={mate} name="Vaso termico liso rosa"/>
        <Card className="item" image={mate} name="Vaso termico liso blanco"/>
        <Card className="item" image={mate} name="Vaso termico personalizado"/>
       </div>
        </body>
    )
}
export default ProductosVasos