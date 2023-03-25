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
      </Routes>
      </BrowserRouter>
  );
}

export default AppRouter