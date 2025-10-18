import styled from "styled-components";
import Escola from "../../../assets/Capitulo1Img/Escola.png";
import Balao_De_Fala from "../../../assets/Capitulo1Img/Balao_De_Fala.png";

import EmPe1 from "../../../assets/Capitulo1Img/Cachorro/EmPe1.png";
import EmPe2 from "../../../assets/Capitulo1Img/Cachorro/EmPe2.png";

export const CHARACTER_IMAGES = {
  variant1: EmPe1,
  variant2: EmPe2,
};

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Escola});
  background-size: 126% auto;
  background-position: 0% bottom;
  position: relative;
`;

export const BalaoImagem = styled.div`
  position: absolute;
  top: 30%;
  left: 23%;

  width: 400px;
  height: 250px;
  z-index: 15;

  background-image: url(${Balao_De_Fala});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TextoBalao = styled.p`
  position: relative;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);

  width: 80%;
  margin: 0;

  text-align: center;
  font-size: 22px;
  font-weight: bold;
  font-family: Arial;
  color: #333;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 16px;
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
