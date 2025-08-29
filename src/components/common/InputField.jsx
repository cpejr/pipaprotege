import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const COLORS = {
  text: "#000000",
  purple: "#8C52FF",
  gray: "#9A9C9F",
};

// Componente de input estilizado
const StyledInput = styled(Input)`
  width: 100%;
  height: 60px; /* Ajustar a altura */
  border-radius: 10px;
  border: 2px solid ${COLORS.gray};
  font-size: 20px;
  padding: 10px 15px;

  // Estilo do placeholder
  &::placeholder {
    color: ${COLORS.gray};
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Kanit", sans-serif;
  }

  // Estado de Foco (quando o usuário clica no campo)
  &:focus,
  &:hover {
    border-color: ${COLORS.purple};
    box-shadow: 0 0 0 2px rgba(140, 82, 255, 0.2);
  }

  // Estilo de erro (quando a validação falha)
  &.ant-input-status-error {
    border-color: #ff4d4f;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  }
`;

const InputField = ({ placeholder, ...rest }) => {
  return <StyledInput placeholder={placeholder} {...rest} />;
};

export default InputField;
