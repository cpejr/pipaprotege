import styled from "styled-components";
import { Link } from "react-router-dom";

const getProp = (prop) => (props) => props[prop] || "";

export const TelaInicial = styled.div`
  height: 120vh;
  width: 100wh;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 46px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;

  margin-top: 650px;
  margin-left: 69px;

  width: 426px;
  height: 106px;

  @media (max-width: 480px) {
    width: 90%;
    height: 70px;
  }
`;

export const Container = styled.div`
  position: ${getProp("position")};
  bottom: ${getProp("bottom")};
  top: ${getProp("top")};
  right: ${getProp("right")};
  left: ${getProp("left")};
  z-index: ${getProp("zIndex")};
  width: ${getProp("width")};
  height: ${getProp("height")};

  background-color: #f8f8f8;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
`;

export const InstructionText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const InputField = styled.input.attrs({
  type: "text",
})`
  width: 80%;
  padding: 10px;
  font-size: 18px;
  color: #333;
  border: 2px solid #ccc;
  border-radius: 8px;
  text-align: center;
  outline: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #007bff;
  }
`;

export const OkButton = styled.button`
  margin: ${(props) => props.margin || "15px 0 0 0"};

  padding: 8px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #8c52ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #190a3939;
  }
`;
