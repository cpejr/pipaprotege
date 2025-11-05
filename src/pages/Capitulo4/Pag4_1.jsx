import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap4/TelaCapitulo4";

const C4_Tela_01 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-02");
  };

  const contentText =
    "Nesta aventura, para se proteger, você precisa entender a diferença entre os toques de confiança e os toques de desconfiança.";

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C4_Tela_01;
