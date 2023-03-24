import Card from './card';
import mate from '../img/4.png'
import '../css/productos.css'
function productos(){
    return(
        <body>
        <div className="container">
        <Card className="item" image={mate} name="Mate camionero grabado"/>
        <Card className="item" image={mate} name="Mate torpedo acero"/>
        <Card className="item" image={mate} name="Mate Imperial"/>
        <Card className="item" image={mate} name="Mate Imperial cincelado"/>
        <Card className="item" image={mate} name="Termo Polar Adventure"/>
        <Card className="item" image={mate} name="Termo media manija"/>
        <Card className="item" image={mate} name="Vasos termicos grabados"/>
        <Card className="item" image={mate} name="Canasta 100% cuero" />
        </div>
        </body>
    )
}
export default productos