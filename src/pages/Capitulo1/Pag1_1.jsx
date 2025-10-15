import { useNavigate } from "react-router-dom";
// Ajuste o caminho de importação para o seu ChapterScreen
import ChapterScreen from "../../components/features/PadraoCap1/ChapterScreen";

const C1_Tela_01 = () => {
  const navigate = useNavigate();

  // A função de avanço leva para a próxima tela
  const handleAdvance = () => {
    navigate("/chapter1/tela-02");
  };

  // O texto exclusivo desta tela
  const contentText = "Oi, eu sou o Pipa!";

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C1_Tela_01;
