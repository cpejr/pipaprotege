import styled from "styled-components";
import fundo from "../../../assets/cap2fundo.png";
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
  background-image: url(${fundo});
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  margin: 0;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  font-family: Arial;
  color: #000;
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
export const ImagemEsquerda = styled.img`
  position: absolute;
  bottom: 30px;
  left: 10%;
  height: 93%;
  object-fit: contain;
  z-index: 12;
`;

export const ImagemDireita = styled.img`
  position: absolute;
  bottom: 40%;
  right: 9%;
  height: 45%;
  object-fit: contain;
  z-index: 12;
`;

export const TextoClicavelDireita = styled.p`
  position: absolute;
  top: 10.5%;
  right: 49%;
  font-size: 24px;
  color: #8c52ff;
  font-weight: bold;
  cursor: pointer;
  z-index: 30;

  &:hover {
    text-decoration: underline;
  }
`;

export const TextoClicavelEsquerda = styled.p`
  position: absolute;
  bottom: 40.5%;
  left: 14%;
  font-size: 24px;
  color: #8c52ff;
  font-weight: bold;
  cursor: pointer;
  z-index: 30;

  &:hover {
    text-decoration: underline;
  }
`;
