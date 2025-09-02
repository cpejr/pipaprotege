import styled from "styled-components";
import { Link } from "react-router-dom";

export const COLORS = {
  text: "#000000",
  purple: "#8C52FF",
  yellow: "#F5BD58",
  white: "#FFFFFF",
};

export const StyledLinkButton = styled(Link)`
  text-decoration: none;
  width: 426px;
  height: 106px;
  background-color: ${(props) => props.bgColor || COLORS.purple};
  color: ${(props) => props.color || COLORS.white};
  border: 3px solid ${(props) => props.borderColor || "black"};
  font-size: 28px;
  font-weight: bold;
  font-family: Arial;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 90vw;
    height: 70px;
    font-size: 16px;
  }
`;
