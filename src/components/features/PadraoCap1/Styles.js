import styled from "styled-components";
import Escola from "../../../assets/Capitulo1Img/Escola.png";

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

export const TextoBalao = styled.p`
  position: absolute;
  top: 35%;
  left: 20%;
  width: 30%;

  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
  color: #333;
  padding: 15px;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 14px;
    width: 60%;
    left: 15%;
    top: 30%;
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
  gap: 15px;
  z-index: 20;
`;
