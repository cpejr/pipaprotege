import styled from "styled-components";
import { Link } from "react-router-dom";
import fundo1 from "../../assets/fundo-d-o-v1.png";
import fundo2 from "../../assets/fundo-d-o-v2.png";
import fundo3 from "../../assets/fundo-d-o-v3.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: ${(props) =>
    props.bg === "1" ? `url(${fundo1})` : props.bg === "2" ? `url(${fundo2})` : `url(${fundo3})`};

  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  background-color: #fff;

  position: relative;
  overflow: hidden;
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

  color: white;
  font-size: 2.5rem;
  border-radius: 6px;

  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  bottom: 5%;
  ${(props) => (props.right ? "right: 5%;" : "left: 5%;")}

  width: 60px;
  height: 60px;
  background-color: #6a34bb;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 2.5rem;
  border-radius: 6px;

  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;
