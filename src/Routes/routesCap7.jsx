import { Route } from "react-router-dom";

import C7_Introducao from "../pages/Capitulo7/C7_Introducao/C7_introducao";
import C7_Tela_01 from "../pages/Capitulo7/Pag7_1"; 
import C7_Tela_02 from "../pages/Capitulo7/Pag7_2"; 
import C7_Tela_03 from "../pages/Capitulo7/Pag7_3"; 
import C7_Tela_04 from "../pages/Capitulo7/Pag7_4"; 
import C7_Tela_05 from "../pages/Capitulo7/Pag7_5";
import C7_Tela_06 from "../pages/Capitulo7/Pag7_6";
import C7_Tela_07 from "../pages/Capitulo7/Pag7_7"; 
import C7_Tela_08 from "../pages/Capitulo7/Pag7_8"; 
import C7_Tela_09 from "../pages/Capitulo7/Pag7_9"; 
import C7_Tela_10 from "../pages/Capitulo7/Pag7_10"; 
import C7_Final from "../pages/Capitulo7/C7_Final/C7_Final";

const Capitulo7RoutesJSX = (
  <Route path='capitulo7'>
    <Route index element={<C7_Introducao />} />
    <Route path='tela-01' element={<C7_Tela_01 />} />
    <Route path='tela-02' element={<C7_Tela_02 />} />
    <Route path='tela-03' element={<C7_Tela_03 />} />
    <Route path='tela-04' element={<C7_Tela_04 />} />
    <Route path='tela-05' element={<C7_Tela_05 />} />
    <Route path='tela-06' element={<C7_Tela_06 />} />
    <Route path='tela-07' element={<C7_Tela_07 />} />
    <Route path='tela-08' element={<C7_Tela_08 />} />
    <Route path='tela-09' element={<C7_Tela_09 />} />
    <Route path='tela-10' element={<C7_Tela_10 />} />
    <Route path='final' element={<C7_Final/>} />
  </Route>
);

export default Capitulo7RoutesJSX;