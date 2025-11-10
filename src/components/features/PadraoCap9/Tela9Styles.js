import styled from "styled-components";
import Escola from "../../../assets/Capitulo1Img/Escola.png";
import BalaoEsquerdo from "../../../assets/Capitulo9Img/BalaoEsquerdo.png";
import Balao_De_Fala from "../../../assets/Capitulo1Img/Balao_De_Fala.png";

import EmPe1 from "../../../assets/Capitulo1Img/Cachorro/EmPe1.png";
import EmPe2 from "../../../assets/Capitulo1Img/Cachorro/EmPe2.png";
import pipasentado from "../../../assets/pipasentado.png";

export const CHARACTER_IMAGES = {
  variant1: EmPe1,
  variant2: EmPe2,
  variant3: pipasentado,
};

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Escola});
  background-size: cover;
  background-position: center bottom;
  position: relative;
  overflow: hidden;
`;

export const CachorroOverlay = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 55%;
  object-fit: contain;
`;

const BalaoBase = styled.div`
  position: absolute;
  width: 450px;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const BalaoImagemEsq = styled(BalaoBase)`
  top: 25%;
  left: 10%;
  background-image: url(${BalaoEsquerdo});
`;

export const BalaoImagemDir = styled(BalaoBase)`
  top: 25%;
  right: 10%;
  background-image: url(${Balao_De_Fala});
`;

export const TextoBalao = styled.p`
  position: absolute;
  top: 41%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  margin: 0;

  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
  line-height: 1.4;

  & strong {
    font-weight: 900;
  }
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
  z-index: 20;
`;
