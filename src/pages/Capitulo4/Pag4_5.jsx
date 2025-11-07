import { useNavigate } from "react-router-dom";
import ProtectionScreen from "../../components/features/PadraoProtecao/PadraoProtecao";
import QuadroConteudo from "../../components/features/PadraoProtecao/QuadroConteudo";

const C4_Tela_05 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-06");
  };

  const mySpeechBubble = <p>Você vai encontrar alguns desafios!</p>;

  return (
    <ProtectionScreen speechBubbleContent={mySpeechBubble} onAdvance={handleAdvance}>
      <QuadroConteudo variant='pata' />
    </ProtectionScreen>
  );
};

export default C4_Tela_05;
