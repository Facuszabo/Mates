import { Routes, Route, BrowserRouter } from "react-router-dom";
import PagHome from '../page/Home'
import PagAccesorio from '../page/Accesorios'
import PagCanasta from '../page/Canastas'
import PagMates from '../page/Mates'
import PagStanley from '../page/Stanley'
import PagTermos from '../page/Termos'
import PagVasos from '../page/Vasos'

const AppRouter=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/canasta" element={<PagCanasta/>}/>
        <Route path="/accesorio" element={<PagAccesorio/>}/>
        <Route path="/mates" element={<PagMates/>}/>
        <Route path="/stanley" element={<PagStanley/>}/>
        <Route path="/termos" element={<PagTermos/>}/>
        <Route path="/vasos" element={<PagVasos/>}/>
        <Route path="/" element={<PagHome/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default AppRouter