import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap4/TelaCapitulo4";

const C4_Tela_02 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-03");
  };

  const contentText =
    "O toque de confiança é de quem você conhece e confia. Esse toque faz você se sentir seguro e protegido!";

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C4_Tela_02;
