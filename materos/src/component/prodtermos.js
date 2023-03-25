import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
function ProductosTermos(){
    return(
        <body>
        <div className="container">
        <Card className="item" image={mate} name="Polar Adventure 1lt"/>
        <Card className="item" image={mate} name="Polar Adventure black 1lt"/>
        <Card className="item" image={mate} name="Bordo metalizado 1,3lt"/>
        <Card className="item" image={mate} name="Rosa metalizado 1,3lt"/>
        <Card className="item" image={mate} name="Rosa pastel 1,3lt"/>
        <Card className="item" image={mate} name="Termo media manija 1lt"/> 
       </div>
        </body>
    )
}
export default ProductosTermos