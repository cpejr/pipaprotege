import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoShieldSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import pipa from "../../assets/capitulo3/imagesPage/pipaTeste1.svg";

const getProp = (prop) => (props) => props[prop] || "";

export const TelaInicial = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  background-color: ${(props) => props.bgColor || "#D1BED1"};
`;

export const LeftDiv = styled.div`
  width: 70%;
  align-items: center;
  flex-direction: column;
  display: flex;
`;
export const RightDiv = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
`;
export const DivText = styled.div`
  width: 90%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;
export const DivButtons = styled.div`
  padding-top: 10px;
  flex-direction: row;
  display: flex;
`;
export const DivShield = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
  z-index: 20;
`;

export const StyleButton = styled.button`
  width: 82%;
  height: 82%;
  background-color: ${(props) => props.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.color || "black"};
  font-size: 35px;
  font-weight: bold;
  font-weight: 900;
  font-family: Arial;
  text-transform: uppercase;
  border: 3px solid ${(props) => props.borderColor || "black"};

  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;

  margin-top: 755px;
  margin-left: 1080px;

  width: 360px;
  height: 110px;

  @media (max-width: 480px) {
    width: 90%;
    height: 70px;
  }
`;
const DEFAULT_COLOR = "#8c52ff";
const CLICKED_COLOR = "green";

export const ShieldIcon = styled(IoShieldSharp)`
  color: ${(props) => props.clickedcolor || DEFAULT_COLOR};
  width: 80px;
  height: 40px;
  cursor: pointer;
  transition: 0.2s;
`;

export const RightIcon = styled(AiFillLike)`
  color: ${(props) => props.clickedcolor || DEFAULT_COLOR};
  width: 80px;
  height: 40px;
  cursor: pointer;
  transition: 0.2s;
`;
