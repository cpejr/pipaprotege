import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap2/ChapterScreen";

const C2_Tela_23 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-25");
  };

  const contentText = (
    <>
      Através dele você pode observar e sentir tudo ao seu redor! Por isso, fique atento e trate-o
      com cuidado.
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant2' />;
};

export default C2_Tela_23;
