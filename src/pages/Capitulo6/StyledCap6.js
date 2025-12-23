import styled from "styled-components";
import { Link } from "react-router-dom";
import fundo from "../../assets/Capitulo6Img/fundo_intro.png";

export const TelaInicial = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Titulo = styled.h1`
  position: absolute;
  bottom: -30px;
  left: 60px;
  font-size: 4em;
  font-weight: bold;
  color: white;
  letter-spacing: 5px;
  text-transform: uppercase;
`;
export const StyleButton = styled.button`
  width: 82%;
  height: 82%;
  background-color: ${(props) => props.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.color || "black"};
  font-size: 35px;
  font-weight: bold;
  font-weight: 900;
  font-family: Arial;
  text-transform: uppercase;
  border: 3px solid ${(props) => props.borderColor || "black"};

  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ButtonDiv = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 60px;
  z-index: 20;
`;
export const StyleLink = styled(Link)`
  text-decoration: none;

  margin-top: 650px;
  margin-left: 69px;

  width: 426px;
  height: 106px;

  @media (max-width: 480px) {
    width: 90%;
    height: 70px;
  }
`;

export const BotoesEscolhaContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;
  gap: 40px;
`;
