import styled, { css } from "styled-components";
import QuizBackground from "../../../assets/Capitulo4Img/QuizBackground.png";
import SinalLaranja from "../../../assets/Capitulo4Img/SinalLaranja.png";
import SinalAmarelo from "../../../assets/Capitulo4Img/SinalAmarelo.png";
import Semaforo from "../../../assets/Capitulo4Img/Semaforo.png";

const COLORS = {
  red: "#ff0000",
  yellow: "#F5BD58",
  green: "#00cc00",
};

export const QuizContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${QuizBackground});
  background-size: 100% auto;
  background-position: center top;
  position: relative;
  background-repeat: no-repeat;
  font-family: Arial, sans-serif;
  color: ${COLORS.text};
`;

export const SemaforoComponente = styled.div`
  position: absolute;
  top: 40vh;
  left: 3%;
  width: 150px;
  height: 60vh;
  background-image: url(${Semaforo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  pointer-events: none;
`;

export const PlacaNumero = styled.div`
  position: absolute;
  top: 10vh;
  left: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${SinalAmarelo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 170px;
  height: 170px;
  font-size: 80px;
  font-weight: bold;
`;

export const ContextoTexto = styled.p`
  position: absolute;
  top: 8%;
  left: 20%;
  width: 70%;

  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
`;

export const LightButton = styled.button`
  width: 88px;
  height: 88px;
  border-radius: 80%;
  border: 2px solid transparent;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  transition: border-color 0.2s;
  left: 5%;

  ${(props) =>
    props.$color === "red" &&
    css`
      top: 42vh;
    `}
  ${(props) =>
    props.$color === "yellow" &&
    css`
      top: 56vh;
    `}
    ${(props) =>
    props.$color === "green" &&
    css`
      top: 70vh;
    `}
`;

export const DecisaoTexto = styled.p`
  position: absolute;
  font-size: 30px;
  left: 13%;
  width: 75%;
  line-height: 2;
  font-weight: medium;

  ${(props) =>
    props.$variant === "red" &&
    css`
      top: 40vh;
    `}
  ${(props) =>
    props.$variant === "yellow" &&
    css`
      top: 53vh;
    `}
  ${(props) =>
    props.$variant === "green" &&
    css`
      top: 65vh;
    `}
`;

export const PistaButton = styled.button`
  width: 120px;
  height: 120px;
  background-image: url(${SinalLaranja});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const OverlayMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  padding: 40px 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 40px;

  ${(props) =>
    props.$variant === "Resposta Correta" &&
    css`
      background-color: #8a57ff;
      color: white;
    `}

  ${(props) =>
    props.$variant === "Resposta Incorreta" &&
    css`
      background-color: #ff5453;
      color: white;
    `}
`;
