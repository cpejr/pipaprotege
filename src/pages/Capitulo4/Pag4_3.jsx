import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap4/TelaCapitulo4";

const C4_Tela_03 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-04");
  };

  const contentText = (
    <>
      Já o <strong style={{ fontWeight: "black" }}>toque de desconfiança</strong> é quando alguém
      toca você e te faz sentir estranho ou com medo. Se acontecer, diga "Não" e peça ajuda para um
      adulto que você confia!
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C4_Tela_03;
