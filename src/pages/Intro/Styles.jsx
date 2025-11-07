import styled from "styled-components";
import { Link } from "react-router-dom";
import fundoIntro from "../../assets/intro.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${fundoIntro});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const CircleButton = styled(Link)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffb703;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background-color: #fb8500;
    color: white;
  }
`;
