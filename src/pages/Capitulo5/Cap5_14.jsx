import ChapterScreen from "../../components/features/PadraoCap5/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo5Img/fundo_intro.png";
import React from "react";

export default function C5_Tela_14() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo5/tela-15");
  };

  const baloes = [
    {
      text: "Ninguém pode fazer isso com você.",
      variant: "variant1",
    },
    {
      text: "Ei, preste atenção! Nada disso é legal, mesmo que  quem faça essas coisas seja seu pai,  sua mãe, um amigo, alguém da sua família ou qualquer outra pessoa.",
      variant: "variant3",
    },
    {
      text: "Se algo desse tipo acontecer ou já tiver acontecido com você, peça juda para um adulto de confiança!",
      variant: "variant6",
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
