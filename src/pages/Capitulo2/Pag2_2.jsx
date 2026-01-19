import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap2/ChapterScreen";

const C2_Tela_02 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-03");
  };

  const contentText = (
    <>
      O nosso corpo é formado por <strong>órgãos, ossos</strong> e <strong>sistemas</strong> que,
      juntos, compõem o nosso organismo. Legal, né?
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C2_Tela_02;
