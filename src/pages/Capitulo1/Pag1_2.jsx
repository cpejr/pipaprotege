import { useNavigate } from "react-router-dom";

import BackgroundAzul from "../../components/features/PadraoCap1/TelaAzul";
import InputModal from "../../components/common/Modal/InputModal";

const C1_Tela_02 = () => {
  const navigate = useNavigate();

  const handleNameSaved = (savedName) => {
    navigate("/capitulo1/tela-03_1");
  };

  return (
    <BackgroundAzul>
      <InputModal nextPath='/capitulo1/tela-03_1' defaultOpen={true} showButton={false} />
    </BackgroundAzul>
  );
};

export default C1_Tela_02;
