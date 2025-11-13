import ChapterScreen from "../../components/features/PadraoCap3/ChapterScreen";

import { useNavigate } from "react-router-dom";

export default function C3_Tela_01() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo3/tela-09");
  };
  const contentText =
    "Ótimo! Você foi muito bem! Espero que agora você esteja mais consciente do seu corpo e das suas escolhas.";
  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
}
