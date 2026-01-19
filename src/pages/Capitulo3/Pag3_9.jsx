import ChapterScreen from "../../components/features/PadraoCap3/ChapterScreen";

import { useNavigate } from "react-router-dom";

export default function C3_Tela_01() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/intro");
  };
  const contentText =
    "Se alguma dúvida surgiu, converse com um adulto confiável para entender melhor a situação. Vamos avançar juntos?";
  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
}
