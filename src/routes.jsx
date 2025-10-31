import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cartilha from "./pages/Cartilha/Cartilha";
import Denuncia from "./pages/Denuncia/Denuncia";
import DeOndeVim from "./pages/DeOndeVim/DeOndeVim";
import Teste from "./pages/Teste/Teste";

import Capitulo3 from "./pages/Jogo/Capitulo3/Cap3";
import Cap3_1 from "./pages/Jogo/Capitulo3/Cap3_1";
import Cap3_2 from "./pages/Jogo/Capitulo3/Cap3_2";
import Cap3_3 from "./pages/Jogo/Capitulo3/Cap3_3";
import Cap3_4 from "./pages/Jogo/Capitulo3/Cap3_4";
import Cap3_5 from "./pages/Jogo/Capitulo3/Cap3_5";
import Cap3_6 from "./pages/Jogo/Capitulo3/Cap3_6";
import Cap3_7 from "./pages/Jogo/Capitulo3/Cap3_7";
import Cap3_8 from "./pages/Jogo/Capitulo3/Cap3_8";
import Cap3_9 from "./pages/Jogo/Capitulo3/Cap3_9";

import Cap5_0 from "./pages/Jogo/Capitulo5/Cap5_0";
import Cap5_1 from "./pages/Jogo/Capitulo5/Cap5_1";
import Cap5_2 from "./pages/Jogo/Capitulo5/Cap5_2";
import Cap5_3 from "./pages/Jogo/Capitulo5/Cap5_3";
import Cap5_4 from "./pages/Jogo/Capitulo5/Cap5_4";
import Cap5_5 from "./pages/Jogo/Capitulo5/Cap5_5";
import Cap5_6 from "./pages/Jogo/Capitulo5/Cap5_6";
import Cap5_7 from "./pages/Jogo/Capitulo5/Cap5_7";
import Cap5_8 from "./pages/Jogo/Capitulo5/Cap5_8";
import Cap5_9 from "./pages/Jogo/Capitulo5/Cap5_9";
import Cap5_10 from "./pages/Jogo/Capitulo5/Cap5_10";
import Cap5_11 from "./pages/Jogo/Capitulo5/Cap5_11";
import Cap5_12 from "./pages/Jogo/Capitulo5/Cap5_12";
import Cap5_13 from "./pages/Jogo/Capitulo5/Cap5_13";
import Cap5_14 from "./pages/Jogo/Capitulo5/Cap5_14";
import Cap5_15 from "./pages/Jogo/Capitulo5/Cap5_15";
import Cap5_16 from "./pages/Jogo/Capitulo5/Cap5_16";
import Cap5_17 from "./pages/Jogo/Capitulo5/Cap5_17";
import Cap5_18 from "./pages/Jogo/Capitulo5/Cap5_18";
import Cap5_19 from "./pages/Jogo/Capitulo5/Cap5_19";

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

  //Capitulo 3
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

  //Capitulo 5
  {
    path: "/Cap5_0",
    element: <Cap5_0 />,
  },
  {
    path: "/Cap5_1",
    element: <Cap5_1 />,
  },
  {
    path: "/Cap5_2",
    element: <Cap5_2 />,
  },
  {
    path: "/Cap5_3",
    element: <Cap5_3 />,
  },
  {
    path: "/Cap5_4",
    element: <Cap5_4 />,
  },
  {
    path: "/Cap5_5",
    element: <Cap5_5 />,
  },
  {
    path: "/Cap5_6",
    element: <Cap5_6 />,
  },
  {
    path: "/Cap5_7",
    element: <Cap5_7 />,
  },
  {
    path: "/Cap5_8",
    element: <Cap5_8 />,
  },
  {
    path: "/Cap5_9",
    element: <Cap5_9 />,
  },
  {
    path: "/Cap5_10",
    element: <Cap5_10 />,
  },
  {
    path: "/Cap5_11",
    element: <Cap5_11 />,
  },
  {
    path: "/Cap5_12",
    element: <Cap5_12 />,
  },
  {
    path: "/Cap5_13",
    element: <Cap5_13 />,
  },
  {
    path: "/Cap5_14",
    element: <Cap5_14 />,
  },
  {
    path: "/Cap5_15",
    element: <Cap5_15 />,
  },
  {
    path: "/Cap5_16",
    element: <Cap5_16 />,
  },
  {
    path: "/Cap5_17",
    element: <Cap5_17 />,
  },
  {
    path: "/Cap5_18",
    element: <Cap5_18 />,
  },
  {
    path: "/Cap5_19",
    element: <Cap5_19 />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
