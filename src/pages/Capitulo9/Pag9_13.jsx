import { useNavigate } from "react-router-dom";
import TelaEnding from "../../components/features/PadraoCap9/TelaEnding";

const C9_Tela_13 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-14");
  };

  const textoCentral = <>Continue se cuidando e se protegendo! Até a próxima aventura!</>;

  return (
    <TelaEnding
      text={textoCentral}
      onAdvance={handleAdvance}
      characterVariant='variant1'
      sceneVariant='2'
    />
  );
};

export default C9_Tela_13;
