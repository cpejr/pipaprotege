import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap2/ChapterScreen";

const C2_Tela_23 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-24");
  };

  const contentText = (
    <>Muito bem! Foi divertido, né? Aposto que você não sabia tudo isso sobre o seu corpo!</>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant2' />;
};

export default C2_Tela_23;
