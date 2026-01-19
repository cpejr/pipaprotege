import { createRoutesFromElements, Route } from "react-router-dom";

import C6_Introducao from "../pages/Capitulo6/Cap6_0";
import C6_Tela_01 from "../pages/Capitulo6/Cap6_1";
import C6_Tela_02 from "../pages/Capitulo6/Cap6_2";
import C6_Tela_03 from "../pages/Capitulo6/Cap6_3";
import C6_Tela_04 from "../pages/Capitulo6/Cap6_4";
import C6_Tela_05 from "../pages/Capitulo6/Cap6_5";
import C6_Tela_06 from "../pages/Capitulo6/Cap6_6";
import C6_Tela_07 from "../pages/Capitulo6/Cap6_7";
import C6_Tela_08 from "../pages/Capitulo6/Cap6_8";
import C6_Tela_09 from "../pages/Capitulo6/Cap6_9";
import C6_Tela_10 from "../pages/Capitulo6/Cap6_10";
import C6_Tela_11 from "../pages/Capitulo6/Cap6_11";
import C6_Tela_12 from "../pages/Capitulo6/Cap6_12";
import C6_Tela_13 from "../pages/Capitulo6/Cap6_13";
import C6_Tela_14 from "../pages/Capitulo6/Cap6_14";
import C6_Tela_15 from "../pages/Capitulo6/Cap6_15";
import C6_Tela_16 from "../pages/Capitulo6/Cap6_16";
import C6_Tela_17 from "../pages/Capitulo6/Cap6_17";
import C6_Tela_18 from "../pages/Capitulo6/Cap6_18";
import C6_Tela_19 from "../pages/Capitulo6/Cap6_19";
import C6_Tela_20 from "../pages/Capitulo6/Cap6_20";
import C6_Tela_21 from "../pages/Capitulo6/Cap6_21";

const Capitulo6RoutesJSX = (
  <Route path='capitulo6'>
    <Route index element={<C6_Introducao />} />
    <Route path='tela-01' element={<C6_Tela_01 />} />
    <Route path='tela-02' element={<C6_Tela_02 />} />
    <Route path='tela-03' element={<C6_Tela_03 />} />
    <Route path='tela-04' element={<C6_Tela_04 />} />
    <Route path='tela-05' element={<C6_Tela_05 />} />
    <Route path='tela-06' element={<C6_Tela_06 />} />
    <Route path='tela-07' element={<C6_Tela_07 />} />
    <Route path='tela-08' element={<C6_Tela_08 />} />
    <Route path='tela-09' element={<C6_Tela_09 />} />
    <Route path='tela-10' element={<C6_Tela_10 />} />
    <Route path='tela-11' element={<C6_Tela_11 />} />
    <Route path='tela-12' element={<C6_Tela_12 />} />
    <Route path='tela-13' element={<C6_Tela_13 />} />
    <Route path='tela-14' element={<C6_Tela_14 />} />
    <Route path='tela-15' element={<C6_Tela_15 />} />
    <Route path='tela-16' element={<C6_Tela_16 />} />
    <Route path='tela-17' element={<C6_Tela_17 />} />
    <Route path='tela-18' element={<C6_Tela_18 />} />
    <Route path='tela-19' element={<C6_Tela_19 />} />
    <Route path='tela-20' element={<C6_Tela_20 />} />
    <Route path='tela-21' element={<C6_Tela_21 />} />
  </Route>
);

export default Capitulo6RoutesJSX;
