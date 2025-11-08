import styled, { css } from "styled-components";
import QuizBackground from "../../../assets/Capitulo4Img/QuizBackground.png";
import SinalLaranja from "../../../assets/Capitulo4Img/SinalLaranja.png";

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

export const PlacaNumero = styled.div`
  position: absolute;
  top: 15%;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  font-size: 80px;
  font-weight: bold;
`;

export const ContextoTexto = styled.p`
  position: absolute;
  top: 6%;
  left: 20%;
  width: 70%;

  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
`;

export const LightButton = styled.button`
  width: 97px;
  height: 97px;
  border-radius: 80%;
  border: 2px solid transparent;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  transition: border-color 0.2s;

  ${(props) =>
    props.$color === "red" &&
    css`
      top: 47%;
      left: 5%;
    `}
  ${(props) =>
    props.$color === "yellow" &&
    css`
      top: 65%;
      left: 5%;
    `}
    ${(props) =>
    props.$color === "green" &&
    css`
      top: 82%;
      left: 5%;
    `}
`;

export const DecisaoTexto = styled.p`
  position: absolute;
  font-size: 30px;
  left: 20%;
  width: 75%;
  line-height: 2;
  font-weight: medium;

  ${(props) =>
    props.$variant === "red" &&
    css`
      top: 45%;
    `}
  ${(props) =>
    props.$variant === "yellow" &&
    css`
      top: 63%;
    `}
  ${(props) =>
    props.$variant === "green" &&
    css`
      top: 81%;
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
