import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap1/ChapterScreen";

const C1_Tela_01 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo1/tela-02");
  };

  const contentText =
    "Oi, eu sou o Pipa! Que legal te encontrar por aqui. Pode me dizer o seu nome?";

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C1_Tela_01;
