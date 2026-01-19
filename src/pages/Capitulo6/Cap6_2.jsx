import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_intro.png";
import React from "react";

export default function C6_Tela_02() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo6/tela-03");
  };

  const baloes = [
    {
      text: "Seus direitos são superpoderes que ajudam você a crescer seguro e protegido. E o seu superpoder mais importante é pedir ajuda!",
      variant: "variant1",
    },
    {
      text: "Se algo diferente  ou estranho acontecer, fale com um adulto que você confia.",
      variant: "variant3",
    },
  ];

  return (
    <ChapterScreen
      onAdvance={handleAdvance}
      characterVariant='variant4'
      backgroundImage={fundo}
      showButton={true}
      baloes={baloes}
    />
  );
}
