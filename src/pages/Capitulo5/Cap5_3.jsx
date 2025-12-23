import ChapterScreen from "../../components/features/PadraoCap5/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo5Img/fundo_intro.png";

export default function C5_Tela_03() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo5/tela-04");
  };

  const baloes = [
    {
      text: "Para  descobrir situações que não são nada legais de acontecer, você deve decifrar palavras, trocando os símbolos pelas letras. Tudo pronto? Se precisar de ajuda chame um amigo ou um adulto confiável.",
      variant: "variant5",
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
