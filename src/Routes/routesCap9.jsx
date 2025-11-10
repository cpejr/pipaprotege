import { Route } from "react-router-dom";
import C9_Introducao from "../pages/Capitulo9/C9_Introducao";
import C9_Tela_01 from "../pages/Capitulo9/Pag9_1";
import C9_Tela_02 from "../pages/Capitulo9/Pag9_2";
import C9_Tela_03 from "../pages/Capitulo9/Pag9_3";
import C9_Tela_04 from "../pages/Capitulo9/Pag9_4";
import C9_Tela_05 from "../pages/Capitulo9/Pag9_5";
import C9_Tela_06 from "../pages/Capitulo9/Pag9_6";
import C9_Tela_07 from "../pages/Capitulo9/Pag9_7";
import C9_Tela_08 from "../pages/Capitulo9/Pag9_8";
import C9_Tela_09 from "../pages/Capitulo9/Pag9_9";
import C9_Tela_10 from "../pages/Capitulo9/Pag9_10";
import C9_Tela_11_1 from "../pages/Capitulo9/Pag9_11_1";
import C9_Tela_11_2 from "../pages/Capitulo9/Pag9_11_2";
import C9_Tela_12 from "../pages/Capitulo9/Pag9_12";
import C9_Tela_13 from "../pages/Capitulo9/Pag9_13";
import C9_Tela_14 from "../pages/Capitulo9/Pag9_14";

const Capitulo9RoutesJSX = (
  <Route path='capitulo9'>
    <Route index element={<C9_Introducao />} />
    <Route path='tela-01' element={<C9_Tela_01 />} />
    <Route path='tela-02' element={<C9_Tela_02 />} />
    <Route path='tela-03' element={<C9_Tela_03 />} />
    <Route path='tela-04' element={<C9_Tela_04 />} />
    <Route path='tela-05' element={<C9_Tela_05 />} />
    <Route path='tela-06' element={<C9_Tela_06 />} />
    <Route path='tela-07' element={<C9_Tela_07 />} />
    <Route path='tela-08' element={<C9_Tela_08 />} />
    <Route path='tela-09' element={<C9_Tela_09 />} />
    <Route path='tela-10' element={<C9_Tela_10 />} />
    <Route path='tela-11_1' element={<C9_Tela_11_1 />} />
    <Route path='tela-11_2' element={<C9_Tela_11_2 />} />
    <Route path='tela-12' element={<C9_Tela_12 />} />
    <Route path='tela-13' element={<C9_Tela_13 />} />
    <Route path='tela-14' element={<C9_Tela_14 />} />
  </Route>
);

export default Capitulo9RoutesJSX;
