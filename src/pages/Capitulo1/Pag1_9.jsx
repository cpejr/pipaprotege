import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap1/ChapterScreen";

const C1_Tela_09 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo1/tela-10");
  };

  const contentText =
    "Para isso, vamos cumprir um pequeno desafio. Será que você consegue encontrar 5 palavras que se relacionam com nosso destino?";

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant2' />;
};

export default C1_Tela_09;
