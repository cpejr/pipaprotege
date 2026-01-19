import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap2/ChapterScreen";

const C2_Tela_07 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-08");
  };

  const contentText = (
    <>
      O corpo humano apresenta inúmeros <strong>órgãos</strong> reunidos em{" "}
      <strong>sistemas</strong> que atuam juntos para realizar funções específicas no organismo.
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant2' />;
};

export default C2_Tela_07;
