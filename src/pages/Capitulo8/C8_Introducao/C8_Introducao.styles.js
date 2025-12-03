import styled from "styled-components";
import Cantina from "../../../assets/Capitulo8Img/Cantina.png";

export const TelaIntroducao = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: url(${Cantina});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const TituloCapitulo = styled.h1`
  color: white;
  padding: 250px 250px;
  border-radius: 10px;
  font-size: 60px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  position: absolute;
  bottom: 50px;
  left: 200px;
`;

export const BotaoContainerIntro = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
