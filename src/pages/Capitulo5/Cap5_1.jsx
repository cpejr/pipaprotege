import ChapterScreen from "../../components/features/PadraoCap5/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo5Img/fundo_intro.png";
import React from "react";

export default function C5_Tela_01() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo5/tela-02");
  };

  const baloes = [
    {
      text: "E, às vezes, mesmo com toda a segurança e proteção, coisas que não tão boas podem acontecer. Agora é hora de falar de situações que  são nada legais.",
      variant: "variant1",
    },
    {
      text: "Prepare-se! A missão legal vai começar!",
      variant: "variant2",
    },
    {
      text: "Crescer é muito legal, né? Descobrimos muitas coisas legais e vencemos muitos desafios. Mas, para tudo isso, a gente tem que ter segurança e proteção.",
      variant: "variant3",
    },
  ];

  return (
    <ChapterScreen
      onAdvance={handleAdvance}
      characterVariant='variant1'
      backgroundImage={fundo}
      showButton={true}
      baloes={baloes}
    />
  );
}
