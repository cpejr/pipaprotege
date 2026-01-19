import ChapterScreen from "../../components/features/PadraoCap5/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo5Img/fundo_intro.png";
import React from "react";

export default function C5_Tela_15() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/intro");
  };

  const baloes = [
    {
      text: "Vamos para uma nova aventura?",
      variant: "variant1",
    },
    {
      text: "Sua pipa ficou legal demais, né! E com ela você pode voar alto!",
      variant: "variant3",
    },
  ];

  return (
    <ChapterScreen
      onAdvance={handleAdvance}
      characterVariant='variant2'
      backgroundImage={fundo}
      showButton={true}
      baloes={baloes}
    />
  );
}
