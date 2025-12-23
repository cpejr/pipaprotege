import { Route } from "react-router-dom";

import C4_Introducao from "../pages/Capitulo4/C4_Introducao/C4_Introducao";
import C4_Tela_01 from "../pages/Capitulo4/Pag4_1";
import C4_Tela_02 from "../pages/Capitulo4/Pag4_2";
import C4_Tela_03 from "../pages/Capitulo4/Pag4_3";
import C4_Tela_04 from "../pages/Capitulo4/Pag4_4";
import C4_Tela_05 from "../pages/Capitulo4/Pag4_5";
import C4_Tela_06 from "../pages/Capitulo4/Pag4_6";
import C4_Tela_07 from "../pages/Capitulo4/Pag4_7";
import C4_Tela_08 from "../pages/Capitulo4/Pag4_8";
import C4_Tela_09 from "../pages/Capitulo4/Pag4_9";
import C4_Tela_10 from "../pages/Capitulo4/Pag4_10";
import C4_Tela_11 from "../pages/Capitulo4/Pag4_11";
import C4_Tela_12 from "../pages/Capitulo4/Pag4_12";
import C4_Tela_13 from "../pages/Capitulo4/Pag4_13";
import C4_Tela_14 from "../pages/Capitulo4/Pag4_14";
import C4_Tela_15 from "../pages/Capitulo4/Pag4_15";
import C4_Tela_16 from "../pages/Capitulo4/Pag4_16";
import C4_Tela_17 from "../pages/Capitulo4/Pag4_17";
import C4_Tela_18 from "../pages/Capitulo4/Pag4_18";
import C4_Tela_19 from "../pages/Capitulo4/Pag4_19";
import C4_Tela_20 from "../pages/Capitulo4/Pag4_20";
import C4_Tela_21 from "../pages/Capitulo4/C4_UltimaPag/Pag4_21";

const Capitulo4RoutesJSX = (
  <Route path='capitulo4'>
    <Route index element={<C4_Introducao />} />
    <Route path='tela-01' element={<C4_Tela_01 />} />
    <Route path='tela-02' element={<C4_Tela_02 />} />
    <Route path='tela-03' element={<C4_Tela_03 />} />
    <Route path='tela-04' element={<C4_Tela_04 />} />
    <Route path='tela-05' element={<C4_Tela_05 />} />
    <Route path='tela-06' element={<C4_Tela_06 />} />
    <Route path='tela-07' element={<C4_Tela_07 />} />
    <Route path='tela-08' element={<C4_Tela_08 />} />
    <Route path='tela-09' element={<C4_Tela_09 />} />
    <Route path='tela-10' element={<C4_Tela_10 />} />
    <Route path='tela-11' element={<C4_Tela_11 />} />
    <Route path='tela-12' element={<C4_Tela_12 />} />
    <Route path='tela-13' element={<C4_Tela_13 />} />
    <Route path='tela-14' element={<C4_Tela_14 />} />
    <Route path='tela-15' element={<C4_Tela_15 />} />
    <Route path='tela-16' element={<C4_Tela_16 />} />
    <Route path='tela-17' element={<C4_Tela_17 />} />
    <Route path='tela-18' element={<C4_Tela_18 />} />
    <Route path='tela-19' element={<C4_Tela_19 />} />
    <Route path='tela-20' element={<C4_Tela_20 />} />
    <Route path='tela-21' element={<C4_Tela_21 />} />
  </Route>
);

export default Capitulo4RoutesJSX;
