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
import DeOndeVim from "./pages/DeOndeVim/DeOndeVim";
import Teste from "./pages/Teste/Teste";
import Capitulo3 from "./pages/Capitulo3/Cap3";
import Cap3_1 from "./pages/Capitulo3/Cap3_1";
import Cap3_2 from "./pages/Capitulo3/Cap3_2";
import Cap3_3 from "./pages/Capitulo3/Cap3_3";
import Cap3_4 from "./pages/Capitulo3/Cap3_4";
import Cap3_5 from "./pages/Capitulo3/Cap3_5";
import Cap3_6 from "./pages/Capitulo3/Cap3_6";
import Cap3_7 from "./pages/Capitulo3/Cap3_7";
import Cap3_8 from "./pages/Capitulo3/Cap3_8";
import Cap3_9 from "./pages/Capitulo3/Cap3_9";

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
  {
    path: "/Capitulo3",
    element: <Capitulo3 />,
  },
  {
    path: "/Cap3_1",
    element: <Cap3_1 />,
  },
  {
    path: "/Cap3_2",
    element: <Cap3_2 />,
  },
  {
    path: "/Cap3_3",
    element: <Cap3_3 />,
  },
  {
    path: "/Cap3_4",
    element: <Cap3_4 />,
  },
  {
    path: "/Cap3_5",
    element: <Cap3_5 />,
  },
  {
    path: "/Cap3_6",
    element: <Cap3_6 />,
  },
  {
    path: "/Cap3_7",
    element: <Cap3_7 />,
  },
  {
    path: "/Cap3_8",
    element: <Cap3_8 />,
  },
  {
    path: "/Cap3_9",
    element: <Cap3_9 />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
