import styled from "styled-components";
import Sala from "../../../assets/Capitulo7Img/PaginaFundo.png";

export const TelaIntroducao = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: url(${Sala});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const TituloCapitulo = styled.h1`
  color: white;
  padding: 11px 20px;
  border-radius: 10px;
  font-size: 60px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  position: absolute;
  upper: 10px;
  text-align: center;
  left: 50%;  
  transform: translateX(-50%)
`;

export const BotaoContainerIntro = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;