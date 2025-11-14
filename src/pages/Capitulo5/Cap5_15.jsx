import ChapterScreen from "../../components/features/PadraoCap5/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo5Img/fundo_intro.png";
import React from "react";

export default function C5_Tela_15() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo5/tela-16");
  };

  const baloes = [
    {
      text: "Vamos começar?",
      variant: "variant1",
    },
    {
      text: "Agora, sua missão é construir uma pipa bem legal! Com ela, você vai aprender sobre os direitos das crianças e adolescentes!",
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
