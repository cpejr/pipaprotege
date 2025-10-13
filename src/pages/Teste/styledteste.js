import styled from "styled-components";
import backgroundImage from "../../assets/tela-inicial.svg";

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
