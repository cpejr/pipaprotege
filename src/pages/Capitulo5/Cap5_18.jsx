import { useNavigate } from "react-router-dom";
import Tela from "../../components/features/PadraoCap5/Tela";
import QuadroDesenho from "../../components/common/Desenho/QuadroDesenho";
import styled from "styled-components";
import Elipse from "../../assets/Capitulo5Img/elipse.png";

const DesenhoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function C5_Tela_18() {
  const navigate = useNavigate();

  const handleSaveDrawing = (dataUrl) => {
    navigate("/capitulo5/tela-19");
  };

  const handleAdvance = () => {
    navigate("/capitulo5/tela-19");
  };

  return (
    <Tela
      onAdvance={handleAdvance}
      characterVariant='variant3'
      ellipseImage={Elipse}
      showButton={true}
    >
      <DesenhoWrapper>
        <QuadroDesenho onSave={handleSaveDrawing} />
      </DesenhoWrapper>
    </Tela>
  );
}
