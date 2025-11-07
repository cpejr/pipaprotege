import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../assets/capitulo 2.png";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  background: #d0c2a9 url(${bg}) center / cover no-repeat;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 48px;
  overflow: hidden;
`;

export const PrimaryButton = styled(Link)`
  text-decoration: none;
  width: 340px;
  height: 85px;
  background: #8c52ff;
  color: #ffffff;
  border: 4px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 26px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 70px;
    font-size: 20px;
  }
`;
