import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap4/TelaCapitulo4";

const C4_Tela_04 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-05");
  };

  const contentText = (
    <>
      Agora é hora de correr! Vamos para a{" "}
      <strong style={{ fontWeight: "black" }}>Pista de Proteção?</strong>
    </>
  );

  return <ChapterScreen text={contentText} onAdvance={handleAdvance} characterVariant='variant1' />;
};

export default C4_Tela_04;
