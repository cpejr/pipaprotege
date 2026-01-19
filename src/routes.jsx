import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Cartilha from "./pages/Cartilha/Cartilha";
import Denuncia from "./pages/Denuncia/Denuncia";
import DeOndeVim1 from "./pages/DeOndeVim/DeOndeVim1";
import DeOndeVim2 from "./pages/DeOndeVim/DeOndeVim2";
import DeOndeVim3 from "./pages/DeOndeVim/DeOndeVim3";
import Intro from "./pages/Intro/Intro";
import Capitulo from "./pages/Capitulos/Capitulo";

import Capitulo1RoutesJSX from "./Routes/routesCap1";
import Capitulo2RoutesJSX from "./Routes/routesCap2";
import Capitulo4RoutesJSX from "./Routes/routesCap4";
import Capitulo3RoutesJSX from "./Routes/routesCap3";
import Capitulo5RoutesJSX from "./Routes/routesCap5";
import Capitulo6RoutesJSX from "./Routes/routesCap6";
import Capitulo9RoutesJSX from "./Routes/routesCap9";
import Capitulo8RoutesJSX from "./Routes/routesCap8";
import Capitulo7RoutesJSX from "./Routes/routesCap7.jsx";

import AppLayout from "./AppLayout/AppLayout.jsx";

import ExitPage from "./pages/ExitPage/ExitPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='cartilha' element={<Cartilha />} />
      <Route path='denuncia' element={<Denuncia />} />
      <Route path='intro' element={<Intro />} />
      <Route path='de-onde-vim'>
        <Route index element={<DeOndeVim1 />} />
        <Route path='2' element={<DeOndeVim2 />} />
        <Route path='3' element={<DeOndeVim3 />} />
      </Route>

      <Route path='tela-saida' element={<ExitPage />} />
      <Route path='capitulo/:numero' element={<Capitulo />} />
      {Capitulo1RoutesJSX}
      {Capitulo2RoutesJSX}
<<<<<<< HEAD
      {Capitulo4RoutesJSX}
=======
>>>>>>> Capitulo2
      {Capitulo3RoutesJSX}
      {Capitulo4RoutesJSX}
      {Capitulo7RoutesJSX}
      {Capitulo9RoutesJSX}
      {Capitulo8RoutesJSX}
      {Capitulo5RoutesJSX}
      {Capitulo6RoutesJSX}
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
