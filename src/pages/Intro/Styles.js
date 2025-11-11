import styled from "styled-components";
import { Link } from "react-router-dom";
import fundo_intro from "../../assets/fundo_intro.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${fundo_intro});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-size: 100% 100%;
`;

export const CircleButton = styled(Link)`
  position: absolute;
  width: 95px;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;

  display: flex;
  transform: translate(-50%, -50%);

  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
`;
