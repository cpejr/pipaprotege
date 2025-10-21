import { useNavigate } from "react-router-dom";
import BackgroundAzul from "../../components/features/PadraoCap1/TelaAzul";

// 🛑 Importe o novo componente
import CacaPalavrasComponent from "../../components/features/CaçaPalavras/CacaPalavras";
import styled from "styled-components";

// Contêiner para centralizar o CacaPalavrasComponent (já que o BackgroundAzul usa flexbox)
const CacaPalavrasWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Adiciona algum padding para telas pequenas */
  box-sizing: border-box;
`;

const C1_Tela_10 = () => {
  const navigate = useNavigate();

  const handleFinishPuzzle = () => {
    // Lógica após clicar em OK (salvar, navegar, etc.)
    navigate("/capitulo1/Tela-11"); // Navega para a próxima tela do capítulo 1
  };

  return (
    <BackgroundAzul>
      <CacaPalavrasWrapper>
        <CacaPalavrasComponent onFinish={handleFinishPuzzle} />
      </CacaPalavrasWrapper>
    </BackgroundAzul>
  );
};

export default C1_Tela_10;
