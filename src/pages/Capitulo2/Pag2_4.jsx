import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import pag4 from "../../assets/Capitulo2/pag4.png";

const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: url(${pag4});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const BotaoEsqueleto = styled.div`
  position: absolute;
  top: 12%;
  right: 5%;
  width: 18%;
  height: 85%;
  cursor: pointer;
`;

const C9_Tela_04 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-05");
  };

  return (
    <TelaCenario>
      <BotaoEsqueleto onClick={handleAdvance} />
    </TelaCenario>
  );
};

export default C9_Tela_04;
