import { Route } from "react-router-dom";

import C2_Introducao from "../pages/Capitulo2/C2_Introducao/C2_Introducao";
import C2_Tela_01 from "../pages/Capitulo2/Pag2_1";
import C2_Tela_02 from "../pages/Capitulo2/Pag2_2";
import C2_Tela_03 from "../pages/Capitulo2/Pag2_3";

const Capitulo2RoutesJSX = (
  <Route path='capitulo2'>
    <Route index element={<C2_Introducao />} />

    <Route path='tela-01' element={<C2_Tela_01 />} />
    <Route path='tela-02' element={<C2_Tela_02 />} />
    <Route path='tela-03' element={<C2_Tela_03 />} />
  </Route>
);

export default Capitulo2RoutesJSX;
