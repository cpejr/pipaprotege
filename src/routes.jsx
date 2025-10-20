import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cartilha from "./pages/Cartilha/Cartilha";
import Denuncia from "./pages/Denuncia/Denuncia";
import DeOndeVim from "./pages/DeOndeVim/DeOndeVim";
import Teste from "./pages/Teste/Teste";
import C1_Introducao from "./pages/Capitulo1/C1_Introducao/C1_Introducao";
import C1_Tela_01 from "./pages/Capitulo1/Pag1_1";
import C1_Tela_02 from "./pages/Capitulo1/Pag1_2";
import C1_Tela_03_1 from "./pages/Capitulo1/Pag1_3/Pag1_3_1";
import C1_Tela_03_2 from "./pages/Capitulo1/Pag1_3/Pag1_3_2";
import C1_Tela_04 from "./pages/Capitulo1/Pag1_4";
import C1_Tela_05 from "./pages/Capitulo1/Pag1_5";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cartilha",
    element: <Cartilha />,
  },
  {
    path: "/denuncia",
    element: <Denuncia />,
  },
  {
    path: "/de-onde-vim",
    element: <DeOndeVim />,
  },
  {
    path: "/Teste",
    element: <Teste />,
  },
  {
    path: "/capitulo1",
    element: <C1_Introducao />,
  },
  {
    path: "/capitulo1/tela-01",
    element: <C1_Tela_01 />,
  },
  {
    path: "/capitulo1/tela-02",
    element: <C1_Tela_02 />,
  },
  {
    path: "/capitulo1/tela-03_1",
    element: <C1_Tela_03_1 />,
  },
  {
    path: "/capitulo1/tela-03_2",
    element: <C1_Tela_03_2 />,
  },
  {
    path: "/capitulo1/tela-04",
    element: <C1_Tela_04 />,
  },
  {
    path: "/capitulo1/tela-05",
    element: <C1_Tela_05 />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
