import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_fim.png";
import React from "react";

export default function C6_Tela_21() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo6/tela-21");
  };

  const baloes = [
    {
      text: "Vem comigo conhecer essa turma.",
      variant: "variant1",
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
