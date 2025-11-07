import styled from "styled-components";
import PataRoxa from "../../../assets/Capitulo4Img/PataRoxa.png";

const PURPLE_BORDER = "#8c52ff";
const BACKGROUND_COLOR = "white";

export const StyledQuadroRoxo = styled.div`
  background-color: ${BACKGROUND_COLOR};
  border: 5px solid ${PURPLE_BORDER};
  border-radius: 20px;
  padding: 20px 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);

  font-family: Arial, sans-serif;
  color: #333;
  text-align: left;
`;

export const PataIcone = styled.img.attrs({
  src: PataRoxa,
  alt: "Ícone de Pata de Proteção",
})`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
