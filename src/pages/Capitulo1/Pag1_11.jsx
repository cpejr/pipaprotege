import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap1/ChapterScreen";

const C1_Tela_11 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/intro");
  };

  const contentText = "Parabéns, você conseguiu! Agora podemos ir, certo?";

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant2' />;
};

export default C1_Tela_11;
