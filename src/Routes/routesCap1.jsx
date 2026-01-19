import { createRoutesFromElements, Route } from "react-router-dom";

import C1_Introducao from "../pages/Capitulo1/C1_Introducao/C1_Introducao";
import C1_Tela_01 from "../pages/Capitulo1/Pag1_1";
import C1_Tela_02 from "../pages/Capitulo1/Pag1_2";
import C1_Tela_03_1 from "../pages/Capitulo1/Pag1_3/Pag1_3_1";
import C1_Tela_03_2 from "../pages/Capitulo1/Pag1_3/Pag1_3_2";
import C1_Tela_04 from "../pages/Capitulo1/Pag1_4";
import C1_Tela_05 from "../pages/Capitulo1/Pag1_5";
import C1_Tela_06 from "../pages/Capitulo1/Pag1_6";
import C1_Tela_07 from "../pages/Capitulo1/Pag1_7";
import C1_Tela_08 from "../pages/Capitulo1/Pag1_8";
import C1_Tela_09 from "../pages/Capitulo1/Pag1_9";
import C1_Tela_10 from "../pages/Capitulo1/Pag1_10";
import C1_Tela_11 from "../pages/Capitulo1/Pag1_11";

const Capitulo1RoutesJSX = (
  
  <Route path='capitulo1'>
    <Route index element={<C1_Introducao />} />

    <Route path='tela-01' element={<C1_Tela_01 />} />
    <Route path='tela-02' element={<C1_Tela_02 />} />
    <Route path='tela-03_1' element={<C1_Tela_03_1 />} />
    <Route path='tela-03_2' element={<C1_Tela_03_2 />} />
    <Route path='tela-04' element={<C1_Tela_04 />} />
    <Route path='tela-05' element={<C1_Tela_05 />} />
    <Route path='tela-06' element={<C1_Tela_06 />} />
    <Route path='tela-07' element={<C1_Tela_07 />} />
    <Route path='tela-08' element={<C1_Tela_08 />} />
    <Route path='tela-09' element={<C1_Tela_09 />} />
    <Route path='tela-10' element={<C1_Tela_10 />} />
    <Route path='tela-11' element={<C1_Tela_11 />} />
  </Route>
);

export default Capitulo1RoutesJSX;
