import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap2/ChapterScreen";

const C2_Tela_25 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/");
  };

  const contentText = (
    <>
      Agora, nosso voo continua. Lembre-se que o seu corpo precisa estar bem para isso. Vamos
      juntos?
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant2' />;
};

export default C2_Tela_25;
