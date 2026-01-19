import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap2/ChapterScreen";

const C2_Tela_06 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-07");
  };

  const contentText = (
    <>
      Você acabou de conhecer os principais ossos do corpo humano. Agora vamos conhecer os órgãos.
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C2_Tela_06;
