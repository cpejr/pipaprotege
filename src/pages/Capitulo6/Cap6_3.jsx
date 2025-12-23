import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_intro.png";
import React from "react";

export default function C6_Tela_03() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo6/tela-04");
  };

  const baloes = [
    {
      text: "Pronto para fazer sua pipa voar bem alto?",
      variant: "variant1",
    },
    {
      text: "Agora que você lembrou como usar seus superpoderes, vamos começar o Desafio das Estrelas!",
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
