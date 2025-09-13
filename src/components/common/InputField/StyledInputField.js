import styled from "styled-components";
import { Input } from "antd";

export const COLORS = {
  purple: "#8C52FF",
  gray: "#808080",
  red: "#ff4d4f",
};

export const StyledInput = styled(Input)`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 2px solid ${COLORS.gray};
  font-size: 20px;
  padding: 10px 15px;

  &::placeholder {
    color: ${COLORS.gray};
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Kanit", sans-serif;
  }

  &:focus,
  &:hover {
    border-color: ${COLORS.purple};
    box-shadow: 0 0 0 2px rgba(140, 82, 255, 0.2);
  }

  &.ant-input-status-error {
    border-color: ${COLORS.red};
    box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  }
`;
