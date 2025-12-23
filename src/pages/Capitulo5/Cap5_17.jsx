import Tela from "../../components/features/PadraoCap5/Tela";
import { useNavigate } from "react-router-dom";
import React from "react";
import Elipse from "../../assets/Capitulo5Img/elipse.png";
export default function C5_Tela_17() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo5/tela-18");
  };

  const baloes = [
    {
      text: "4.No centro da pipa desenhe algo que você goste! Esse desenho é o seu\ndireito de falar e ser escutado.\n\n\n 5.Desenhe a rabiola da pipa. A rabiola garante a diversão da\nbrincadeira! E você tem o direito de brincar e de se divertir.\n\n\n6.Faça a linha que segura a pipa. Ela mantém a pipa firme no céu, assim\ncomo seu direito a ter pessoas que se preocupam com você e que te apoiam.\n\n\n7.Pinte a sua pipa como quiser! Cada cor mostra o quanto você é\nespecial.",
      variant: "variant7",
    },
  ];

  return (
    <Tela
      onAdvance={handleAdvance}
      characterVariant='variant3'
      ellipseImage={Elipse}
      showButton={true}
      baloes={baloes}
    />
  );
}
