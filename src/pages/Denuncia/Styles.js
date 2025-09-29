import styled from "styled-components";
import { Link } from "react-router-dom";
import fundoComTextoDenuncia from "../../assets/fundo-denuncia.png";

export const ContainerDenuncia = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(${fundoComTextoDenuncia});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;

  background-color: #f5bd58;

  position: relative;
  overflow: hidden;
`;

export const CloseButtonD = styled(Link)`
  position: absolute;
  top: 2%;
  left: 3%;

  width: 60px;
  height: 60px;
  background-color: #6a34bb;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 3.5rem;
  border-radius: 6px;

  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 900px) {
    width: 52px;
    height: 52px;
    font-size: 2.4rem;
    top: 16px;
    left: 16px;
  }
`;
