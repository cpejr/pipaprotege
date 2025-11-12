import ChapterScreen from "../../components/features/PadraoCap3/ChapterScreen";

import { useNavigate } from "react-router-dom";

export default function C3_Tela_01() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo3/tela-04");
  };
  const contentText =
    " Com o desenvolvimento dessa habilidade, você fortalece sua capacidade de tomar decisões conscientes e cuidar de si de forma responsável.";
  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
}
