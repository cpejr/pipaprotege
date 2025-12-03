import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import pag13 from "../../assets/Capitulo2/pag13.png";
import Button from "../../components/common/Button/Button";

const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${pag13});
  background-size: 100% 100%;
  background-position: center;
  position: relative;
`;

const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const C2_Tela_13 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-23");
  };

  return (
    <TelaCenario>
      <BotaoContainer>
        <Button onClick={handleAdvance} type='avancar'>
          AVANÇAR
        </Button>
      </BotaoContainer>
    </TelaCenario>
  );
};

export default C2_Tela_13;
