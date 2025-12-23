import Tela from "../../components/features/PadraoCap5/Tela";
import { useNavigate } from "react-router-dom";
import React from "react";
import Elipse from "../../assets/Capitulo5Img/elipse.png";
export default function C5_Tela_16() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo5/tela-17");
  };

  const baloes = [
    {
      text: "1.Desenhe um risco na horizontal (deitado). Esse risco é a base da\npipa, que ajuda ela aficar segura e firme para enfrentar qualquer\ndesafio, igual ao seu direito à proteção.\n\n\n2.Depois, desenhe um risco na vertical (em pé). Esse risco é como\n vento que faz a pipa voar alto e conhecer novos lugares, assim como seu\ndireito à educação  e ao cuidado.\n\n\n3.Ligue as pontas de cada risco para formar a pipa. Para voar alto, a\npipa precisa estar forte, e você precisa comer bem e descansar. Esse\né o seu direito à vida, à alimentação e à saúde.",
      variant: "variant7",
    },
  ];

  return (
    <Tela
      onAdvance={handleAdvance}
      characterVariant='variant3'
      ellipseImage={Elipse}
      showButton={true}
      baloes={baloes}
    />
  );
}
