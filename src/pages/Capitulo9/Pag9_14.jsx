import { useNavigate } from "react-router-dom";
import TelaEnding from "../../components/features/PadraoCap9/TelaEnding";

const C9_Tela_14 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/");
  };

  return <TelaEnding sceneVariant='3' />;
};

export default C9_Tela_14;
