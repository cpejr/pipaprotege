import { createRoutesFromElements, Route } from "react-router-dom";

import C3_Introducao from "../pages/Capitulo3/C3_Introducao";
import C3_Tela_01 from "../pages/Capitulo3/Pag3_1";
import C3_Tela_02 from "../pages/Capitulo3/Pag3_2";
import C3_Tela_03 from "../pages/Capitulo3/Pag3_3";
import C3_Tela_04 from "../pages/Capitulo3/Pag3_4";
import C3_Tela_05 from "../pages/Capitulo3/Pag3_5";
import C3_Tela_06 from "../pages/Capitulo3/Pag3_6";
import C3_Tela_07 from "../pages/Capitulo3/Pag3_7";
import C3_Tela_08 from "../pages/Capitulo3/Pag3_8";
import C3_Tela_09 from "../pages/Capitulo3/Pag3_9";

const Capitulo3RoutesJSX = (
  <Route path='capitulo3'>
    <Route index element={<C3_Introducao />} />
    <Route path='tela-01' element={<C3_Tela_01 />} />
    <Route path='tela-02' element={<C3_Tela_02 />} />
    <Route path='tela-03' element={<C3_Tela_03 />} />
    <Route path='tela-04' element={<C3_Tela_04 />} />
    <Route path='tela-05' element={<C3_Tela_05 />} />
    <Route path='tela-06' element={<C3_Tela_06 />} />
    <Route path='tela-07' element={<C3_Tela_07 />} />
    <Route path='tela-08' element={<C3_Tela_08 />} />
    <Route path='tela-09' element={<C3_Tela_09 />} />
  </Route>
);

export default Capitulo3RoutesJSX;
