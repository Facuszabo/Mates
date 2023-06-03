import Nav from '../component/nav'
import Productos from '../component/compra'
import mate from '../img/mates/torpaluminio.jpg'
import mate1 from '../img/mates/torpaluminio1.jpg'
import mate2 from '../img/mates/torpaluminio2.jpg'
import Footer from '../component/footer';
function TorpedoAluminio(){
    return(
        <>
        <Nav/>
        <Productos image={mate} image1={mate1} image2={mate2} name="Torpedo aluminio" desc="Simple, economico y para toda la vida. Torpedo con su virola de aluminio que te permite disfrutar de tu compañero mucho mas accesible y sin dejar de lado la calidad"/>
        <Footer/>
        </>
    )
}
export default TorpedoAluminio