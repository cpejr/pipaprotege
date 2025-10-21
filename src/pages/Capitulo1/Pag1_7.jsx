import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap1/ChapterScreen";

const C1_Tela_07 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo1/tela-08");
  };

  const contentText = "Agora, nós vamos para o meu lugar favorito: o laboratório de ciências!";

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant2' />;
};

export default C1_Tela_07;
