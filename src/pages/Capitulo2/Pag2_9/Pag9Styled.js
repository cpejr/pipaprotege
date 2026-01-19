import styled, { css } from "styled-components";
import pag13 from "../../../assets/Capitulo2/pag13.png";

const COR_ACERTO = "#6caf5c";

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${pag13});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const GameArea = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 60%;
  display: grid;
  grid-template-rows: 20% 25% auto;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

export const NameTargetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  grid-row: 1 / 2;
  grid-column: span 1;
  margin-bottom: 20px;
`;

export const NameTarget = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  min-height: 50px;
  border: 2px dashed gray;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 1.2vw;
  cursor: default;

  ${(props) =>
    props.$isCorrect &&
    css`
      border-color: ${COR_ACERTO};
      color: white;
    `}
`;

export const OrganImage = styled.img`
  grid-row: 3 / 4;
  grid-column: span 1;

  width: 10%;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  cursor: grab;

  ${(props) =>
    props.$isDragging &&
    css`
      opacity: 0.5;
    `}

  ${(props) =>
    props.$isLocked &&
    css`
      cursor: default;
      pointer-events: none;
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 4vw;

      opacity: 0.8;
      filter: drop-shadow(0 0 5px #00ff00) brightness(1.1);
    `}
`;

export const OrganTray = styled.div`
  grid-row: 4 / 5;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 20%;
`;
