import styled from "styled-components";
import QuadroNegro from "../../../assets/Capitulo8Img/QuadroNegro.png";

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${QuadroNegro});
  background-size: 100% 100%;
  background-position: center bottom;
  position: relative;
  overflow: hidden;
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 70px;
  left: 80px;
  right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuadroMensagem = styled.div`
  position: absolute;
  top: 7%;
  left: 8%;
  width: 80%;
  height: 58%;
  padding: 2.5%;

  * {
    font-family: Arial, sans-serif;
    color: white;
    text-align: left;
    margin: 0;
  }

  h1 {
    font-size: 3vw;
    font-weight: 900;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.5vw;
    font-weight: 900;
    margin-top: 30px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  ul {
    padding: 0;
  }

  li {
    font-size: 2vw;
    font-weight: bold;
    line-height: 1.8;
    padding-left: 20px;
    position: relative;
  }

  ol {
    list-style-type: none;
    padding: 0;
  }
`;

export const PlaceholderDiv = styled.div`
  width: 20vw;
  max-width: 350px;
  height: 70px;
`;
