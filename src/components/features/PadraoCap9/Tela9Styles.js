import styled, { css } from "styled-components";
import Escola from "../../../assets/Capitulo1Img/Escola.png";
import BalaoEsquerdo from "../../../assets/Capitulo9Img/BalaoEsquerdo.png";
import Balao_De_Fala from "../../../assets/Capitulo1Img/Balao_De_Fala.png";
import CortinaLateral from "../../../assets/Capitulo9Img/CortinaLateral.png";
import CortinaInteira from "../../../assets/Capitulo9Img/CortinaInteira.png";
import CortinaFinal from "../../../assets/Capitulo9Img/CortinaFinal.png";

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
export const StyledTituloFlutuante = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  color: black;

  padding: 15px 40px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  font-size: 18px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  z-index: 50;
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
`;

export const BotoesEscolhaContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CenaEncerramento = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center bottom;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;

  ${(props) => {
    switch (props.$variant) {
      case "1":
        return css`
          background-image: url(${CortinaLateral});
        `;
      case "2":
        return css`
          background-image: url(${CortinaInteira});
          background-position: center center;
        `;
      case "3":
        return css`
          background-image: url(${CortinaFinal});
          background-position: center center;
        `;
      default:
        return css`
          background-image: url(${Escola});
        `;
    }
  }}
`;

export const TextoFIM = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  font-weight: 900;
  color: #f5bd58;
  text-shadow: 4px 4px 0px #8b4513;
  z-index: 10;
`;
