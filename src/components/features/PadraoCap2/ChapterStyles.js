import styled from "styled-components";
import laboratorio from "../../../assets/Capitulo2/laboratorio.png";
import Balao_De_Fala from "../../../assets/Capitulo1Img/Balao_De_Fala.png";

import EmPe1 from "../../../assets/Capitulo2/laboAcenando.png";
import EmPe2 from "../../../assets/Capitulo2/laboParado.png";

export const CHARACTER_IMAGES = {
  variant1: EmPe1,
  variant2: EmPe2,
};

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: url(${laboratorio});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const BalaoImagem = styled.div`
  position: absolute;
  top: 30%;
  left: 23%;

  width: 450px;
  height: 300px;
  z-index: 15;

  background-image: url(${Balao_De_Fala});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TextoBalao = styled.p`
  position: absolute;
  top: 44%;
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
  left: 5%;
  height: 55%;
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
