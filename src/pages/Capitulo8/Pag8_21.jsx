import { useNavigate } from "react-router-dom";
import BackgroundLaranja from "../../components/features/PadraoCap8/TelaLaranja";
import SistemaPintura from "../../components/features/PinturaBolo/SistemaPintura";

const C8_Tela_21 = () => {
  const navigate = useNavigate();
  const nextPath = "/intro";

  const handleSavePainting = (coresDoBolo) => {
    navigate(nextPath);
  };

  return (
    <BackgroundLaranja>
      <SistemaPintura onSave={handleSavePainting} />
    </BackgroundLaranja>
  );
};

export default C8_Tela_21;
