import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap1/ChapterScreen";

const C1_Tela_04 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo1/tela-05");
  };

  const contentText =
    "Que bom que você topou me acompanhar nessa jornada. Para que a gente se conheça melhor você pode fazer um desenho seu!";

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C1_Tela_04;
