import styled from "styled-components";
import pag13 from "../../../assets/Capitulo2/pag13.png";

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

export const CharadaGrid = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  width: 550px;
  max-width: 100%;
  padding-bottom: 50px;
`;

export const CharadaBotao = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;

  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 35px;

  font-size: 46px;
  font-weight: 700;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;
