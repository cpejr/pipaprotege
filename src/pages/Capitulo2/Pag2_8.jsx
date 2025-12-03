import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap2/ChapterScreen";

const C2_Tela_08 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-09");
  };

  const contentText = (
    <>
      E cada órgão possui uma característica única. O coração, por exemplo, bate 104 mil vezes por
      dia. Impressionante, né?
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C2_Tela_08;
