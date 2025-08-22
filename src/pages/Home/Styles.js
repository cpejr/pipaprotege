import styled from "styled-components";
import backgroundImage from "../../assets/tela-inicial.svg";
import { Link } from "react-router-dom";

export const TelaInicial = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrganizeButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyleButton = styled.button`
  width: 426px;
  height: 106px;
  background-color: ${(props) => props.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.color || "black"};
  font-size: 28px;
  font-weight: bold;
  font-family: Arial;
  text-transform: uppercase;
  border: 3px solid ${(props) => props.borderColor || "black"};
  border-radius: 10px;
  cursor: pointer;
`;

export const Junto = styled.div`
  display: Flex;
  flex-direction: Column;
  align-items: center;
  gap: 16px;
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
`;
