import styled from "styled-components";
import { Link } from "react-router-dom";
import fundoComTexto from "../../assets/fundo-cartilha-texto.png";

export const ContainerCartilha = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${fundoComTexto});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

export const ImageColumn = styled.div`
  position: absolute;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);

  width: 25%;
  max-width: 235px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 900px) {
    position: static;
    transform: none;
    width: 90%;
    height: auto;
    margin: 20px auto;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
`;

export const CloseButton = styled(Link)`
  position: absolute;
  top: 2%;
  left: 3%;

  width: 60px;
  height: 60px;
  background-color: #6a34bb;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: white;
  font-size: 3.5rem;

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    width: 80px;
    height: 75px;
    font-size: 2.5rem;
    top: 20px;
    left: 20px;
  }
`;
