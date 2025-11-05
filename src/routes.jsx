import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cartilha from "./pages/Cartilha/Cartilha";
import Denuncia from "./pages/Denuncia/Denuncia";
import DeOndeVim from "./pages/DeOndeVim/DeOndeVim";
import Teste from "./pages/Teste/Teste";
import { capitulo1Routes } from "./Routes/routesCap1";
import { capitulo4Routes } from "./Routes/routesCap4";

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
  ...capitulo1Routes,
  ...capitulo4Routes,
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
