import styled from "styled-components";
import { Link } from "react-router-dom";

export const TelaInicial = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center 60%;
  box-sizing: border-box;
  background-color: #ff7f41;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column; /* empilha os elementos verticalmente */
  justify-content: top;
  align-items: center; /* centraliza horizontalmente */
  gap: 20px; /* espaço entre as partes */

  & > div:nth-child(2) {
    align-items: flex-end;
    margin-left: 35%;
  }
  & > div:nth-child(3) {
    align-items: flex-end;
    margin-left: 18%;
  }
`;

export const DivText = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: contain;
  display: block;
`;

export const Texto = styled.p`
  text-align: center;
  font-size: 80px;
  font-weight: bold;
  font-family: Arial;
  color: #000;
  line-height: 1.4;
  white-space: pre-line;
`;
