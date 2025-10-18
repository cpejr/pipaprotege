import { useNavigate } from "react-router-dom";

import BackgroundAzul from "../../components/features/PadraoCap1/TelaAzul";
import InputModal from "../../components/common/Modal/InputModal";

const C1_Tela_02 = () => {
  const navigate = useNavigate();

  const handleNameSaved = (savedName) => {
    console.log(`[Página 2] Nome salvo: ${savedName}.`);
    navigate("/capitulo1/tela-03");
  };

  return (
    <BackgroundAzul>
      <InputModal />
    </BackgroundAzul>
  );
};

export default C1_Tela_02;
