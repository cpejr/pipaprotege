import { useNavigate } from "react-router-dom";
import BackgroundAzul from "../../components/features/PadraoCap1/TelaAzul";
import QuadroDesenho from "../../components/common/Desenho/QuadroDesenho";
import styled from "styled-components";

const DesenhoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const C1_Tela_05 = () => {
  const navigate = useNavigate();
  const handleSaveDrawing = (dataUrl) => {
    navigate("/capitulo1/tela-06");
  };

  return (
    <BackgroundAzul>
      <DesenhoWrapper>
        <QuadroDesenho onSave={handleSaveDrawing} />
      </DesenhoWrapper>
    </BackgroundAzul>
  );
};

export default C1_Tela_05;
