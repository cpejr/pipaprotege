import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_intro.png";
import React from "react";

export default function C6_Tela_03() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo6/tela-02");
  };

  const baloes = [
    {
      text: "Ela fica tão forte e voa tão alto que chega perto das estrelas!",
      variant: "variant1",
    },
    {
      text: "Sabia que você usa seu escudo e seus superpoderes, sua pipa fica mais legal e mais forte?",
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
