import { useNavigate } from "react-router-dom";
import ProtectionScreen from "../../components/features/PadraoProtecao/PadraoProtecao";
import QuadroConteudo from "../../components/features/PadraoProtecao/QuadroConteudo";

const C4_Tela_07 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-08");
  };

  return (
    <ProtectionScreen speechBubbleContent={null} onAdvance={handleAdvance}>
      <QuadroConteudo variant='placa' />
    </ProtectionScreen>
  );
};

export default C4_Tela_07;
