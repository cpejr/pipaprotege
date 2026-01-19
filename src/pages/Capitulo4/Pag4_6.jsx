import { useNavigate } from "react-router-dom";
import ProtectionScreen from "../../components/features/PadraoProtecao/PadraoProtecao";
import QuadroConteudo from "../../components/features/PadraoProtecao/QuadroConteudo";

const C4_Tela_06 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-07");
  };

  return (
    <ProtectionScreen speechBubbleContent={null} onAdvance={handleAdvance}>
      <QuadroConteudo variant='semaforo' />
    </ProtectionScreen>
  );
};

export default C4_Tela_06;
