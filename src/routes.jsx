import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cartilha from "./pages/Cartilha/Cartilha";
import Denuncia from "./pages/Denuncia/Denuncia";
import DeOndeVim from "./pages/DeOndeVim/DeOndeVim";
import Teste from "./pages/Teste/Teste";
import Intro from "./pages/Intro/Intro";
import Capitulo2 from "./pages/Capitulo2/Capitulo2";
import Cap_perg1 from "./pages/Capitulo2/Cap_perg1";
import Cap_perg2 from "./pages/Capitulo2/Cap_perg2";
import Cap_perg3 from "./pages/Capitulo2/Cap_perg3";
import Cap_perg4 from "./pages/Capitulo2/Cap_perg4";
import Cap_perg5 from "./pages/Capitulo2/Cap_perg5";
import Cap_perg6 from "./pages/Capitulo2/Cap_perg6";
import Cap_perg7 from "./pages/Capitulo2/Cap_perg7";
import Cap_perg8 from "./pages/Capitulo2/Cap_perg8";
import Cap_perg9 from "./pages/Capitulo2/Cap_perg9";
import Capitulo2_14 from "./pages/Capitulo2/Capitulo2_14";
import Capitulo2_15 from "./pages/Capitulo2/Capitulo2_15";
import Capitulo2_16 from "./pages/Capitulo2/Capitulo2_16";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cartilha", element: <Cartilha /> },
  { path: "/denuncia", element: <Denuncia /> },
  { path: "/de-onde-vim", element: <DeOndeVim /> },
  { path: "/teste", element: <Teste /> },
  { path: "/intro", element: <Intro /> },

  { path: "/capitulo2", element: <Capitulo2 /> },

  { path: "/capitulo/1", element: <Cap_perg1 /> },
  { path: "/capitulo/2", element: <Cap_perg2 /> },
  { path: "/capitulo/3", element: <Cap_perg3 /> },
  { path: "/capitulo/4", element: <Cap_perg4 /> },
  { path: "/capitulo/5", element: <Cap_perg5 /> },
  { path: "/capitulo/6", element: <Cap_perg6 /> },
  { path: "/capitulo/7", element: <Cap_perg7 /> },
  { path: "/capitulo/8", element: <Cap_perg8 /> },
  { path: "/capitulo/9", element: <Cap_perg9 /> },

  { path: "/capitulo2/14", element: <Capitulo2_14 /> },
  { path: "/capitulo2/15", element: <Capitulo2_15 /> },
  { path: "/capitulo2/16", element: <Capitulo2_16 /> },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
