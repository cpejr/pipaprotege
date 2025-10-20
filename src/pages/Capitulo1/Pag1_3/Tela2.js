import styled from "styled-components";
import EmPe2 from "../../../assets/Capitulo1Img/Cachorro/EmPe2.png";
import Balao_De_Fala from "../../../assets/Capitulo1Img/Balao_De_Fala.png";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const CachorroImagem = styled.div`
  position: absolute;
  left: 54%;
  transform: translateX(-50%);
  bottom: -270px;

  width: 700px;
  height: 700px;
  z-index: 10;

  background-image: url(${EmPe2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const BalaoImagem = styled.div`
  position: absolute;
  top: 25%;
  left: 60%;

  width: 350px;
  height: 250px;
  z-index: 15;

  background-image: url(${Balao_De_Fala});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 200px;
  }
`;

export const TextoBalao = styled.p`
  position: absolute;
  top: 40%;
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
