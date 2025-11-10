import { useNavigate } from "react-router-dom";
import Chapter9Screen from "../../components/features/PadraoCap9/TelaCapitulo9";

const C9_Tela_10 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-11");
  };

  return <Chapter9Screen onAdvance={handleAdvance} characterVariant='variant2' />;
};

export default C9_Tela_10;
