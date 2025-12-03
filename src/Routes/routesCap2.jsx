import { Route } from "react-router-dom";

import C2_Introducao from "../pages/Capitulo2/C2_Introducao/C2_Introducao";
import C2_Tela_01 from "../pages/Capitulo2/Pag2_1";
import C2_Tela_02 from "../pages/Capitulo2/Pag2_2";
import C2_Tela_03 from "../pages/Capitulo2/Pag2_3";
import C2_Tela_04 from "../pages/Capitulo2/Pag2_4";
import C2_Tela_06 from "../pages/Capitulo2/Pag2_6";
import C2_Tela_07 from "../pages/Capitulo2/Pag2_7";
import C2_Tela_08 from "../pages/Capitulo2/Pag2_8";
import C2_Tela_10 from "../pages/Capitulo2/Pag2_10";
import C2_Tela_11 from "../pages/Capitulo2/Pag2_11";
import C2_Tela_12 from "../pages/Capitulo2/Pag2_12";
import C2_Tela_13 from "../pages/Capitulo2/Pag2_13";
import C2_Tela_23 from "../pages/Capitulo2/Pag2_23";
import C2_Tela_24 from "../pages/Capitulo2/Pag2_24";
import C2_Tela_25 from "../pages/Capitulo2/Pag2_25";

const Capitulo2RoutesJSX = (
  <Route path='capitulo2'>
    <Route index element={<C2_Introducao />} />

    <Route path='tela-01' element={<C2_Tela_01 />} />
    <Route path='tela-02' element={<C2_Tela_02 />} />
    <Route path='tela-03' element={<C2_Tela_03 />} />
    <Route path='tela-04' element={<C2_Tela_04 />} />
    <Route path='tela-06' element={<C2_Tela_06 />} />
    <Route path='tela-07' element={<C2_Tela_07 />} />
    <Route path='tela-08' element={<C2_Tela_08 />} />
    <Route path='tela-10' element={<C2_Tela_10 />} />
    <Route path='tela-11' element={<C2_Tela_11 />} />
    <Route path='tela-12' element={<C2_Tela_12 />} />
    <Route path='tela-13' element={<C2_Tela_13 />} />
    <Route path='tela-23' element={<C2_Tela_23 />} />
    <Route path='tela-24' element={<C2_Tela_24 />} />
    <Route path='tela-25' element={<C2_Tela_25 />} />
  </Route>
);

export default Capitulo2RoutesJSX;
