import { Route } from "react-router-dom";

import C8_Introducao from "../pages/Capitulo8/C8_Introducao/C8_Introducao";
import C8_Tela_01 from "../pages/Capitulo8/Pag8_1";
import C8_Tela_02 from "../pages/Capitulo8/Pag8_2";
import C8_Tela_03 from "../pages/Capitulo8/Pag8_3";
import C8_Tela_04 from "../pages/Capitulo8/Pag8_4";
import C8_Tela_05 from "../pages/Capitulo8/Pag8_5";
import C8_Tela_06 from "../pages/Capitulo8/Pag8_6";
import C8_Tela_07 from "../pages/Capitulo8/Pag8_7";
import C8_Tela_08 from "../pages/Capitulo8/Pag8_8";
import C8_Tela_09 from "../pages/Capitulo8/Pag8_9";
import C8_Tela_10 from "../pages/Capitulo8/Pag8_10";
import C8_Tela_11 from "../pages/Capitulo8/Pag8_11";
import C8_Tela_12 from "../pages/Capitulo8/Pag8_12";
import C8_Tela_13 from "../pages/Capitulo8/Pag8_13";

const Capitulo8RoutesJSX = (
  <Route path='capitulo8'>
    <Route index element={<C8_Introducao />} />
    <Route path='tela-01' element={<C8_Tela_01 />} />
    <Route path='tela-02' element={<C8_Tela_02 />} />
    <Route path='tela-03' element={<C8_Tela_03 />} />
    <Route path='tela-04' element={<C8_Tela_04 />} />
    <Route path='tela-05' element={<C8_Tela_05 />} />
    <Route path='tela-06' element={<C8_Tela_06 />} />
    <Route path='tela-07' element={<C8_Tela_07 />} />
    <Route path='tela-08' element={<C8_Tela_08 />} />
    <Route path='tela-09' element={<C8_Tela_09 />} />
    <Route path='tela-10' element={<C8_Tela_10 />} />
    <Route path='tela-11' element={<C8_Tela_11 />} />
    <Route path='tela-12' element={<C8_Tela_12 />} />
    <Route path='tela-13' element={<C8_Tela_13 />} />
  </Route>
);

export default Capitulo8RoutesJSX;
