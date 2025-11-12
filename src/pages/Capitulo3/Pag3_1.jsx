
import ChapterScreen from "../../components/features/PadraoCap3/ChapterScreen";

import { useNavigate } from "react-router-dom";

export default function C3_Tela_01() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo3/tela-02");
  };
  const contentText =
    "Aqui vamos aprender sobre um assunto muito importante: nossa proteção! O conhecimento da autonomia e da consciência do corpo vai nos ajudar.";
  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
}
