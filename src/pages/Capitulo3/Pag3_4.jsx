import ChapterScreen from "../../components/features/PadraoCap3/ChapterScreen";

import { useNavigate } from "react-router-dom";

export default function C3_Tela_01() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo3/tela-05");
  };
  const contentText =
    "Podemos praticar algumas situações que vão te ajudar a entender esse assunto, o que acha?";
  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
}
