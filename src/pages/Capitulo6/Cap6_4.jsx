import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_jogo.png";
import React from "react";

export default function C6_Tela_04() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo6/tela-05");
  };

  const baloes = [
    {
      text: "Cada estrela representa um\nsuperpoder que você guarda dentro\nde si mesmo.\n\nCada estrela terá um desafio.\nQuando  terminar todos, sua pipa\nvai voar bem alto, pertinho das\nestrelas!",
      variant: "variant8",
    },
  ];

  return (
    <ChapterScreen
      onAdvance={handleAdvance}
      backgroundImage={fundo}
      showButton={true}
      showPipa={true}
      baloes={baloes}
    />
  );
}
