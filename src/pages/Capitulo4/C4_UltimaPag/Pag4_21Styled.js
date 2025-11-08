import styled from "styled-components";
import UltimaTela from "../../../assets/Capitulo4Img/UltimaTela.png";
const COR_VERDE = "#6caf5c";

export const FinalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COR_VERDE};
  background-image: url(${UltimaTela});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
`;
