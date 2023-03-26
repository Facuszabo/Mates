import { Routes, Route, BrowserRouter } from "react-router-dom";
import PagHome from '../page/Home'
import PagAccesorio from '../page/Accesorios'
import PagCanasta from '../page/Canastas'
import PagMates from '../page/Mates'
import PagGrabados from '../page/Grabados'
import PagTermos from '../page/Termos'
import PagVasos from '../page/Vasos'
import PagContacto from '../page/Contacto'
import BombCinc from "../page/BombCinc";
import BombLisa from "../page/BombLisa";
import Despolvillador from "../page/Despolvilladoor";
import YerbLatas from "../page/YerberoLat";
import YerbSimil from "../page/YerberoCuero";
import PolarAdv from "../page/PolarAdv";
import PolarAdvBlack from "../page/PolarAdvBlack";
import RosaMetal from "../page/RosaMetal";
import RosaPastel from "../page/Rosapastel";
import BordoMetalizado from "../page/Bordo";
import MediaManija from "../page/mediaman";
import Vasorosa from "../page/VasoRosa";
import Vasoblanco from "../page/VasoBlanco";
import Vasograbado from "../page/VasoGrab";
import Similcuero from "../page/similcuero";
import Simimanija from "../page/similmanija";
import Cuero from "../page/cuero";
import Camionerograbado from "../page/camionerograb";
import Imperialgrabado from "../page/imperialgrab";
import Torpedograbado from "../page/torpedograb";
import Cuerograbado from "../page/cuerograb";
import CamioneroAluminio from "../page/CamioneroAluminio";
import CamioneroAcero from "../page/CamioneroAcero";
import CamioneroCincelado from "../page/CamioneroCincelado";
import TorpedoAluminio from "../page/TorpedoAluminio";
import TorpedoAluminioCincelado from "../page/TorpedoAluminioCincelado";
import TorpedoAcero from "../page/TorpedoAcero";
import TorpedoAlpaca from "../page/TorpedoAlpaca";
import ImperialLiso from "../page/Imperial";
import ImperialCincelado from "../page/ImperialCincelado";
import ImperialPatitas from "../page/Imperialpatitas";
import ImperialCueroLabrado from "../page/ImperialCueroLabrado";
const AppRouter=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/canasta" element={<PagCanasta/>}/>
        <Route path="/accesorio" element={<PagAccesorio/>}/>
        <Route path="/mates" element={<PagMates/>}/>
        <Route path="/grabados" element={<PagGrabados/>}/>
        <Route path="/termos" element={<PagTermos/>}/>
        <Route path="/vasos" element={<PagVasos/>}/>
        <Route path="/" element={<PagHome/>}/>
        <Route path="/contacto" element={<PagContacto/>}/>
        <Route path="/accesorio/bombillacincelada" element={<BombCinc/>}/>        
        <Route path="/accesorio/bombillalisa" element={<BombLisa/>}/> 
        <Route path="/accesorio/despolvillador" element={<Despolvillador/>}/> 
        <Route path="/accesorio/yerberolatas" element={<YerbLatas/>}/> 
        <Route path="/accesorio/yerberosimil" element={<YerbSimil/>}/> 
        <Route path="/termos/polaradventure" element={<PolarAdv/>}/>        
        <Route path="/termos/polaradventureblack" element={<PolarAdvBlack/>}/> 
        <Route path="/termos/rosametalizado" element={<RosaMetal/>}/> 
        <Route path="/termos/rosapastel" element={<RosaPastel/>}/> 
        <Route path="/termos/bordometalizado" element={<BordoMetalizado/>}/> 
        <Route path="/termos/mediamanija" element={<MediaManija/>}/> 
        <Route path="/vasos/rosa" element={<Vasorosa/>}/> 
        <Route path="/vasos/blanco" element={<Vasoblanco/>}/> 
        <Route path="/vasos/personalizado" element={<Vasograbado/>}/> 
        <Route path="/canasta/simil" element={<Similcuero/>}/> 
        <Route path="/canasta/similmanijacuero" element={<Simimanija/>}/> 
        <Route path="/canasta/cuero100%" element={<Cuero/>}/> 
        <Route path="/grabados/camionerograbado" element={<Camionerograbado/>}/>
        <Route path="/grabados/imperialgrabado" element={<Imperialgrabado/>}/>
        <Route path="/grabados/torpedograbado" element={<Torpedograbado/>}/>
        <Route path="/grabados/canastasgrabadas" element={<Cuerograbado/>}/>
        <Route path="/mates/camioneroaluminio" element={<CamioneroAluminio/>}/>
        <Route path="/mates/camioneroacero" element={<CamioneroAcero/>}/>
        <Route path="/mates/camionerocincelado" element={<CamioneroCincelado/>}/>
        <Route path="/mates/torpedoaluminio" element={<TorpedoAluminio/>}/>
        <Route path="/mates/torpedoaluminiocincelado" element={<TorpedoAluminioCincelado/>}/>
        <Route path="/mates/torpedoacero" element={<TorpedoAcero/>}/>
        <Route path="/mates/torpedoalpaca" element={<TorpedoAlpaca/>}/>
        <Route path="/mates/imperialliso" element={<ImperialLiso/>}/>
        <Route path="/mates/imperialcincelado" element={<ImperialCincelado/>}/>
        <Route path="/mates/imperialconpatitas" element={<ImperialPatitas/>}/>
        <Route path="/mates/imperiallabrado" element={<ImperialCueroLabrado/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default AppRouter