import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoShieldSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";

const getProp = (prop) => (props) => props[prop] || "";

export const TelaInicial = styled.div`
  height: 120vh;
  width: 100vw;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
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
  width: 160px;
  height: 80px;
  cursor: pointer;
  transition: 0.2s;

  position: ${getProp("position")};
  bottom: ${getProp("bottom")};
  right: ${getProp("right")};
  z-index: ${getProp("zIndex")};
`;

export const RightIcon = styled(AiFillLike)`
  color: ${(props) => props.clickedcolor || DEFAULT_COLOR};
  width: 160px;
  width: 160px;
  height: 80px;
  cursor: pointer;
  transition: 0.2s;

  position: ${getProp("position")};
  bottom: ${getProp("bottom")};
  right: ${getProp("right")};
  z-index: ${getProp("zIndex")};
`;
