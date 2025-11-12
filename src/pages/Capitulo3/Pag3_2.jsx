import ChapterScreen from "../../components/features/PadraoCap3/ChapterScreen";

import { useNavigate } from "react-router-dom";

export default function C3_Tela_01() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo3/tela-03");
  };
  const contentText =
    "O seu corpo é a sua casa! Ele é seu, e só seu! Para cuidar bem dele, é fundamental saber expressar claramente seus desejos e limites.";
  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
}
