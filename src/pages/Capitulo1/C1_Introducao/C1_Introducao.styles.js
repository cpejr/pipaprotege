import styled from "styled-components";
import Escola from "../../../assets/Capitulo1Img/Escola.png";

export const TelaIntroducao = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: url(${Escola});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TituloCapitulo = styled.h1`
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 60px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
`;

export const BotaoContainerIntro = styled.div`
  margin-bottom: 20px;
`;
