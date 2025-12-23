import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_intro.png";
import React from "react";

export default function C6_Tela_20() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo6/tela-21");
  };

  const baloes = [
    {
      text: "Soltar pipa é muito legal né? Sabia que tem pessoas bem legais por aí que também gostam de soltar pipa e ajudar crianças e adolescentes?",
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
