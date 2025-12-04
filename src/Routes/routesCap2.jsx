import { createRoutesFromElements, Route } from "react-router-dom";

import C2 from "../pages/Capitulo2/Esqueleto";

const Capitulo2RoutesJSX = (
  <Route path='capitulo2'>
    <Route index element={<C2 />} />
  </Route>
);

export default Capitulo2RoutesJSX;
