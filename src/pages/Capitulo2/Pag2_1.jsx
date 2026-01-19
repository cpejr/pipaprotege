import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap2/ChapterScreen";

const C2_Tela_01 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-02");
  };

  const contentText = (
    <>
      Estamos no laboratório de ciências. Esse é um lugar de muito conhecimento, então se prepare
      para aprender mais sobre o corpo humano.
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C2_Tela_01;
