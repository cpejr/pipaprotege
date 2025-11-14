import { useNavigate } from "react-router-dom";
import TelaEnding from "../../components/features/PadraoCap9/TelaEnding";

const C9_Tela_12 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-13");
  };

  const textoCentral = (
    <>
      Uau, que demais! Você é muito <strong>especial!</strong> Nosso vôo chegou ao fim. Mas sempre
      que você precisar, eu estarei aqui!
    </>
  );

  return (
    <TelaEnding
      text={textoCentral}
      onAdvance={handleAdvance}
      characterVariant='variant1'
      sceneVariant='1'
    />
  );
};

export default C9_Tela_12;
