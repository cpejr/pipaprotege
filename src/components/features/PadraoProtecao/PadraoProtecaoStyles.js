import styled from "styled-components";
import Banheiro from "../../../assets/Capitulo4Img/Banheiro.png";
import Balao_De_Fala from "../../../assets/Capitulo1Img/Balao_De_Fala.png";
import CachorroSentado from "../../../assets/Capitulo4Img/CachorroSentado.png";

export const CHARACTER_IMAGES = {
  variant1: CachorroSentado,
};

export const TelaCenarioProtecao = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Banheiro});
  background-size: 100% auto;
  background-position: 0% bottom;
  position: relative;
`;

export const BalaoImagemProtecao = styled.div`
  position: absolute;
  top: 15%;
  left: 20%;
  width: 400px;
  height: 300px;
  z-index: 15;

  background-image: url(${Balao_De_Fala});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    top: 35%;
    left: 5%;
    width: 60%;
    height: 200px;
  }
`;

export const TextoBalaoProtecao = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
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

export const CachorroOverlayProtecao = styled.img`
  position: absolute;
  bottom: 0;
  left: 5%;
  height: 60%;
  object-fit: contain;
  z-index: 10;

  @media (max-width: 768px) {
    left: 0;
    height: 40%;
  }
`;

export const BotaoContainerProtecao = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
  z-index: 20;
`;

export const QuadroRoxoSlot = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
  z-index: 15;

  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  width: 100%;

  @media (max-width: 770px) {
    top: 60%;
    right: auto;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 40%;
    max-width: none;
  }

  @media (max-width: 480px) {
    top: 65%;
  }
`;
