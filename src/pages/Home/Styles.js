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
<<<<<<< HEAD
  width: 426px;
  height: 106px;
=======
  width: 100%;
  height: 100%;
>>>>>>> main
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
<<<<<<< HEAD
  border-radius: 10px;
  cursor: pointer;
=======

  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 18px;
  }
>>>>>>> main
`;

export const Junto = styled.div`
  display: Flex;
  flex-direction: Column;
  align-items: center;
  gap: 16px;
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
<<<<<<< HEAD
=======

  margin-top: ${(props) => props.marginTop || 0};

  width: 426px;
  height: 106px;

  @media (max-width: 480px) {
    width: 90%;
    height: 70px;
  }
>>>>>>> main
`;
