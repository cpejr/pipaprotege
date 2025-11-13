import { Route } from "react-router-dom";

import C8_Introducao from "../pages/Capitulo8/C8_Introducao/C8_Introducao";
import C8_Tela_01 from "../pages/Capitulo8/Pag8_1";
import C8_Tela_02 from "../pages/Capitulo8/Pag8_2";
import C8_Tela_03 from "../pages/Capitulo8/Pag8_3";
import C8_Tela_04 from "../pages/Capitulo8/Pag8_4";
import C8_Tela_05 from "../pages/Capitulo8/Pag8_5";
import C8_Tela_06 from "../pages/Capitulo8/Pag8_6";
import C8_Tela_07 from "../pages/Capitulo8/Pag8_7";

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
  </Route>
);

export default Capitulo8RoutesJSX;
