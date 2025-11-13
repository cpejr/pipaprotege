import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap1/ChapterScreen";

const C9_Tela_01 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-02");
  };

  const contentText = (
    <>
      Sabia que uma pipa precisa de vento para voar? Se o vento soprar com <strong>cuidado</strong>,
      a pipa fica lá no alto!
    </>
  );
  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C9_Tela_01;
