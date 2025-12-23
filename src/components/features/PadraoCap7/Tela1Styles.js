import styled from "styled-components";
import escola from "../../../assets/Capitulo7Img/PaginaFundo.png";

import EmPe1 from "../../../assets/Capitulo7Img/PipaJaleco.png";
import EmPe2 from "../../../assets/Capitulo1Img/Cachorro/EmPe2.png";
import BalaoEsquerdo from "../../../assets/Capitulo9Img/BalaoEsquerdo.png";
import Balao_De_Fala from "../../../assets/Capitulo1Img/Balao_De_Fala.png";

export const CHARACTER_IMAGES = {
  variant1: EmPe1,
  variant2: EmPe2,
};

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${escola});
  background-size: 100% auto;
  background-position: 0% bottom;
  position: relative;
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
  left: 20%;
  background-image: url(${BalaoEsquerdo});
`;

export const BalaoImagemDir = styled(BalaoBase)`
  top: 25%;
  right: 15%;
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

export const CachorroOverlay = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 65%;
  object-fit: contain;
  z-index: 10;
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
  z-index: 20;
`;

export const QuadroMensagem = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  width: 30%;
  max-height: 70%;
  padding: 2.5%;

  background-color: white;
  border: 5px solid #6caf5c;
  border-radius: 40px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  p {
    font-family: Arial, sans-serif;
    font-size: 2vw;
    color: #000;
    line-height: 1.6;
    text-align: left;
    margin: 0;
  }
`;
