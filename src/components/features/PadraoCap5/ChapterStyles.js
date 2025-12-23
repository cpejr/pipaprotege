import styled from "styled-components";

import fundo from "../../../assets/Capitulo5Img/fundo_intro.png";

import CachorroSerio from "../../../assets/Capitulo5Img/Cachorro/serio.png";
import CachorroAcenando from "../../../assets/Capitulo5Img/Cachorro/acenando.png";
import CachorroFeliz from "../../../assets/Capitulo5Img/Cachorro/feliz.png";

import Balao_De_Fala_DC from "../../../assets/Capitulo5Img/BalaoDeFala/DireitaEmCima.png";
import Balao_De_Fala_DB from "../../../assets/Capitulo5Img/BalaoDeFala/DireitaEmBaixo.png";
import Balao_De_Fala_EC from "../../../assets/Capitulo5Img/BalaoDeFala/EsquerdaEmCima.png";
import Balao_De_Fala_EB from "../../../assets/Capitulo5Img/BalaoDeFala/EsquerdaEmBaixo.png";
import Balao_De_Fala_RP from "../../../assets/Capitulo5Img/BalaoDeFala/RetanguloPequeno.png";
import Balao_De_Fala_RL from "../../../assets/Capitulo5Img/BalaoDeFala/RetanguloLargo.png";
import Balao_De_Fala_RG from "../../../assets/Capitulo5Img/BalaoDeFala/RetanguloGrande.png";

export const BALAO_IMAGES = {
  variant1: Balao_De_Fala_DC,
  variant2: Balao_De_Fala_DB,
  variant3: Balao_De_Fala_EC,
  variant4: Balao_De_Fala_RP,
  variant5: Balao_De_Fala_RL,
  variant6: Balao_De_Fala_EB,
  variant7: Balao_De_Fala_RG,
};

export const CHARACTER_IMAGES = {
  variant1: CachorroSerio,
  variant2: CachorroAcenando,
  variant3: CachorroFeliz,
};

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${({ $background }) => $background});
  background-size: cover;
  background-position: center bottom;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tela = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ff7f41;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BalaoImagem = styled.div`
  position: absolute;
  z-index: 15;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ $image }) => $image});

  ${({ $variant }) => {
    switch ($variant) {
      case "variant1":
        return `
          top: 8%;
          left: 56%;
          width: 400px;
          height: 250px;
        `;
      case "variant2":
        return `
          top: 46%;
          left: 56%;
          width: 400px;
          height: 420px;
        `;
      case "variant3":
        return `
          top: 8%;
          left: 21%;
          width: 400px;
          height: 250px;
        `;
      case "variant4":
        return `
          top: 12%;
          left: 15%;
          width: 500px;
          height: 340px;
        `;
      case "variant5":
        return `
          top: 15%;
          left: 60%;
          width: 500px;
          height: 700px;
        `;
      case "variant6":
        return `
          top: 50%;
          left: 17%;
          width: 400px;
          height: 400px;
        `;
      case "variant7":
        return `
          top: 10%;
          left: 30%;
          width: 900px;
          height: 900px;
        `;
    }
  }}
`;

export const TextoBalao = styled.p`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: 0;

  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
  color: #000;
  line-height: 1.4;
  white-space: pre-line;

  ${({ $variant }) => {
    switch ($variant) {
      case "variant1":
        return `
          top: 40%;
          left: 50%;
        `;
      case "variant2":
        return `
          top: 16%;
          left: 50%;
        `;
      case "variant3":
        return `
          top: 40%;
          left: 50%;
        `;
      case "variant4":
        return `
          top: 50%;
          left: 35%;
        `;
      case "variant5":
        return `
          top: 18%;
          left: 50%;
        `;
      case "variant6":
        return `
          top: 30%;
          left: 50%;
        `;
      case "variant7":
        return `
          top: 26%;
          left: 50%;
        `;
    }
  }}

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FundoElipse = styled.img`
  position: absolute;
  z-index: 5; /* atrás do cachorro (que tem z-index 10) */
  object-fit: contain;

  ${({ $variant }) => {
    switch ($variant) {
      case "variant3":
        return `
          left: -150px;
          width: 500px;
          height: 500px;
        `;
      default:
        return `
          display: none;
        `;
    }
  }}
`;

export const CachorroOverlay = styled.img`
  position: absolute;
  height: 55%;
  object-fit: contain;
  z-index: 10;

  ${({ $variant }) => {
    switch ($variant) {
      case "CachorroSerio":
        return `
          bottom: 0;
          left: 0;
        `;
      case "CachorroAcenando":
        return `
          bottom: 0;
          left: 0;
        `;
      case "variant3":
        return `
          bottom: 20%;
          left: 0;
        `;
    }
  }}
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
  z-index: 20;
`;
