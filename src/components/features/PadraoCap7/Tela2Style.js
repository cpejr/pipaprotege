import styled from "styled-components";
import quadro from "../../../assets/Capitulo7Img/Quadroverde.png";
import quadrado from "../../../assets/Capitulo7Img/IconQuadro.png";

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${quadro});
  background-size: 100% auto;
  background-position: 0% bottom;
  position: relative;
`;

export const Titulo = styled.h1`
  color: white;
  padding: 11px 20px;
  border-radius: 10px;
  font-size: 48px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  position: absolute;
  top: 20px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

export const Container = styled.div`
  display: flex;
  transform: translateY(-5%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 15px;
`;

export const Linha = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  width: 85%;
  align-items: center;
  margin-top: -20px;
`;

export const Quadrado = styled.div`
  width: 256px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: red;
  border: 3px solid black;
  border-radius: 8px;
`;

export const TextoQuadrado = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
  position: absolute;

  gap: 10px;
`;

export const TextoLado = styled.p`
  color: white;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 65%;
  height: 96px;
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
  z-index: 20;
`;
