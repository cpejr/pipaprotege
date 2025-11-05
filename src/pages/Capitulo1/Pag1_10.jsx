import { useNavigate } from "react-router-dom";
import BackgroundAzul from "../../components/features/PadraoCap1/TelaAzul";

import CacaPalavrasComponent from "../../components/features/CaçaPalavras/CacaPalavras";
import styled from "styled-components";

const CacaPalavrasWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; 
  box-sizing: border-box;
`;

const C1_Tela_10 = () => {
  const navigate = useNavigate();

  const handleFinishPuzzle = () => {
    navigate("/capitulo1/Tela-11"); 
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
