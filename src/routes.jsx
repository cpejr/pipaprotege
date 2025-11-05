import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cartilha from "./pages/Cartilha/Cartilha";
import Denuncia from "./pages/Denuncia/Denuncia";

import DeOndeVim1 from "./pages/DeOndeVim/DeOndeVim1";
import DeOndeVim2 from "./pages/DeOndeVim/DeOndeVim2";
import DeOndeVim3 from "./pages/DeOndeVim/DeOndeVim3";

import Intro from "./pages/Intro/Intro";

import Capitulo from "./pages/Capitulos/Capitulo";
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
    path: "/intro",
    element: <Intro />,
  },

  {
    path: "/de-onde-vim",
    element: <DeOndeVim1 />,
  },
  {
    path: "/de-onde-vim2",
    element: <DeOndeVim2 />,
  },
  {
    path: "/de-onde-vim3",
    element: <DeOndeVim3 />,
  },

  {
    path: "/capitulo/:numero",
    element: <Capitulo />, // Placeholder, cada capítulo vai ser resolvido depois
  },
  ...capitulo1Routes,
  ...capitulo4Routes,
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
