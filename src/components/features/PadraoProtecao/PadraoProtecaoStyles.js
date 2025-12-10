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

  background-image: url(${Balao_De_Fala});
  background-size: contain;
  background-repeat: no-repeat;
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
`;

export const CachorroOverlayProtecao = styled.img`
  position: absolute;
  bottom: 0;
  left: 5%;
  height: 60%;
  object-fit: contain;
`;

export const BotaoContainerProtecao = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
`;

export const QuadroRoxoSlot = styled.div`
  position: absolute;
  top: 45%;
  right: 14%;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  width: 100%;
`;
