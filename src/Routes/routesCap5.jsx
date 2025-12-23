import { createRoutesFromElements, Route } from "react-router-dom";

import C5_Introducao from "../pages/Capitulo5/Cap5_0";
import C5_Tela_01 from "../pages/Capitulo5/Cap5_1";
import C5_Tela_02 from "../pages/Capitulo5/Cap5_2";
import C5_Tela_03 from "../pages/Capitulo5/Cap5_3";
import C5_Tela_04 from "../pages/Capitulo5/Cap5_4";
import C5_Tela_05 from "../pages/Capitulo5/Cap5_5";
import C5_Tela_06 from "../pages/Capitulo5/Cap5_6";
import C5_Tela_07 from "../pages/Capitulo5/Cap5_7";
import C5_Tela_08 from "../pages/Capitulo5/Cap5_8";
import C5_Tela_09 from "../pages/Capitulo5/Cap5_9";
import C5_Tela_10 from "../pages/Capitulo5/Cap5_10";
import C5_Tela_11 from "../pages/Capitulo5/Cap5_11";
import C5_Tela_12 from "../pages/Capitulo5/Cap5_12";
import C5_Tela_13 from "../pages/Capitulo5/Cap5_13";
import C5_Tela_14 from "../pages/Capitulo5/Cap5_14";
import C5_Tela_15 from "../pages/Capitulo5/Cap5_15";
import C5_Tela_16 from "../pages/Capitulo5/Cap5_16";
import C5_Tela_17 from "../pages/Capitulo5/Cap5_17";
import C5_Tela_18 from "../pages/Capitulo5/Cap5_18";
import C5_Tela_19 from "../pages/Capitulo5/Cap5_19";

const Capitulo5RoutesJSX = (
  <Route path='capitulo5'>
    <Route index element={<C5_Introducao />} />
    <Route path='tela-01' element={<C5_Tela_01 />} />
    <Route path='tela-02' element={<C5_Tela_02 />} />
    <Route path='tela-03' element={<C5_Tela_03 />} />
    <Route path='tela-04' element={<C5_Tela_04 />} />
    <Route path='tela-05' element={<C5_Tela_05 />} />
    <Route path='tela-06' element={<C5_Tela_06 />} />
    <Route path='tela-07' element={<C5_Tela_07 />} />
    <Route path='tela-08' element={<C5_Tela_08 />} />
    <Route path='tela-09' element={<C5_Tela_09 />} />
    <Route path='tela-10' element={<C5_Tela_10 />} />
    <Route path='tela-11' element={<C5_Tela_11 />} />
    <Route path='tela-12' element={<C5_Tela_12 />} />
    <Route path='tela-13' element={<C5_Tela_13 />} />
    <Route path='tela-14' element={<C5_Tela_14 />} />
    <Route path='tela-15' element={<C5_Tela_15 />} />
    <Route path='tela-16' element={<C5_Tela_16 />} />
    <Route path='tela-17' element={<C5_Tela_17 />} />
    <Route path='tela-18' element={<C5_Tela_18 />} />
    <Route path='tela-19' element={<C5_Tela_19 />} />
  </Route>
);

export default Capitulo5RoutesJSX;
