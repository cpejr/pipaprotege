import C4_Introducao from "../pages/Capitulo4/C4_Introducao/C4_Introducao";
import C4_Tela_01 from "../pages/Capitulo4/Pag4_1";
import C4_Tela_02 from "../pages/Capitulo4/Pag4_2";
import C4_Tela_03 from "../pages/Capitulo4/Pag4_3";
import C4_Tela_04 from "../pages/Capitulo4/Pag4_4";
import C4_Tela_05 from "../pages/Capitulo4/Pag4_5";
import C4_Tela_06 from "../pages/Capitulo4/Pag4_6";
import C4_Tela_07 from "../pages/Capitulo4/Pag4_7";

export const capitulo4Routes = [
  {
    path: "/capitulo4",
    element: <C4_Introducao />,
  },
  {
    path: "/capitulo4/tela-01",
    element: <C4_Tela_01 />,
  },
  {
    path: "/capitulo4/tela-02",
    element: <C4_Tela_02 />,
  },
  {
    path: "/capitulo4/tela-03",
    element: <C4_Tela_03 />,
  },
  {
    path: "/capitulo4/tela-04",
    element: <C4_Tela_04 />,
  },
  {
    path: "/capitulo4/tela-05",
    element: <C4_Tela_05 />,
  },
  {
    path: "/capitulo4/tela-06",
    element: <C4_Tela_06 />,
  },
  {
    path: "/capitulo4/tela-07",
    element: <C4_Tela_07 />,
  },
];
