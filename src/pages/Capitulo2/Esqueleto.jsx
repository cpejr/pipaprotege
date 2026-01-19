import { useNavigate } from "react-router-dom";
import ScreenBody from "../../components/features/PadraoCap2/ScreenBody.jsx";

const C2_Esqueleto = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-06");
  };

  return <ScreenBody onAdvance={handleAdvance} />;
};

export default C2_Esqueleto;
