import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cartilha from "./pages/Cartilha/Cartilha";
import Denuncia from "./pages/Denuncia/Denuncia";
import DeOndeVim from "./pages/DeOndeVim/DeOndeVim";
import Teste from "./pages/Teste/Teste";
import C1_Tela_01 from "./pages/Capitulo1/Pag1_1";
import C1_Introducao from "./pages/Capitulo1/C1_Introducao/C1_Introducao";

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
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
