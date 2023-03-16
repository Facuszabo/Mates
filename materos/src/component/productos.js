import Card from './productos';
import mate from '../img/4.png'
import '../css/productos.css'
function productos(){
    return(
        <body>
        <div className="container">
        <Card className="item" image={mate} name="Mate camionero" precio="$5000" precio2="$4800" text="precio contado" text2="precio tarjeta"/>
        <Card className="item" image={mate} name="Mate camionero" precio="$5000" precio2="$4800" text="precio contado" text2="precio tarjeta"/>
        <Card className="item" image={mate} name="Mate camionero" precio="$5000" precio2="$4800" text="precio contado" text2="precio tarjeta"/>
        <Card className="item" image={mate} name="Mate camionero" precio="$5000" precio2="$4800" text="precio contado" text2="precio tarjeta"/>
        <Card className="item" image={mate} name="Mate camionero" precio="$5000" precio2="$4800" text="precio contado" text2="precio tarjeta"/>
        <Card className="item" image={mate} name="Mate camionero" precio="$5000" precio2="$4800" text="precio contado" text2="precio tarjeta"/>
        <Card className="item" image={mate} name="Mate camionero" precio="$5000" precio2="$4800" text="precio contado" text2="precio tarjeta"/>
        <Card className="item" image={mate} name="Mate camionero" precio="$5000" precio2="$4800" text="precio contado" text2="precio tarjeta"/>
        </div>
        </body>
    )
}
export default productos