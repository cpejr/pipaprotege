import React from "react";
import { Button as AntdButton } from "antd";
import styled from "styled-components";
import { CloseOutlined, ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const COLORS = {
  text: "#000000",
  purple: "#8C52FF",
  yellow: "#F5BD58",
  white: "#FFFFFF",
};

const StyledButton = styled(AntdButton)`
  font-family: Arial;
  font-weight: bold;
  font-size: 28px;
  border-radius: 0;
  height: auto;
  padding: 0;
  display: flex;
  align-items: center;

  /* Estilos padrão para os botões */
  &.close,
  &.avancar,
  &.voltar,
  &.iniciar {
    width: 426px;
    height: 106px;

    @media (max-width: 480px) {
      width: 90vw;
      height: 70px;
      font-size: 16px;
    }
  }

  /* Estilos específicos para o tipo 'fechar' */
  &.close {
    background-color: ${COLORS.yellow};
    color: ${COLORS.text};
    border: none;

    .anticon {
      background-color: ${COLORS.purple};
      color: ${COLORS.white};
      padding: 0 40px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;

      @media (max-width: 480px) {
        font-size: 25px;
        padding: 0 20px;
      }
    }
  }

  /* Estilos para os tipos 'avancar' e 'voltar' */
  &.avancar,
  &.voltar {
    background-color: ${COLORS.yellow};
    color: ${COLORS.text};
    border: none;

    div.yellow-wrapper {
      background-color: ${COLORS.yellow};
      color: ${COLORS.text};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-grow: 1;
    }

    .anticon {
      background-color: ${COLORS.purple};
      color: ${COLORS.white};
      width: 100px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
    }
  }

  /* Estilo específico para 'voltar' (inverte a direção do ícone) */
  &.voltar {
    flex-direction: row-reverse;
  }

  /* Estilos para o tipo 'ok' */
  &.ok {
    background-color: ${COLORS.purple};
    color: ${COLORS.white};
    border: none;
    width: 76px;
    height: 62.39px;
    justify-content: center;
  }

  /* Estilos para o tipo 'iniciar' */
  &.iniciar {
    background-color: ${COLORS.purple};
    color: ${COLORS.white};
    border: 4px solid ${COLORS.white};
    width: 426px;
    height: 106px;
    justify-content: center;
  }
`;

const Button = ({ children, onClick, type, ...rest }) => {
  let iconComponent;
  if (type === "close") {
    iconComponent = <CloseOutlined />;
  } else if (type === "avancar") {
    iconComponent = <ArrowRightOutlined />;
  } else if (type === "voltar") {
    iconComponent = <ArrowLeftOutlined />;
  }

  if (type === "avancar" || type === "voltar") {
    return (
      <StyledButton className={type} onClick={onClick} {...rest}>
        <div className='yellow-wrapper'>{children}</div>
        {iconComponent}
      </StyledButton>
    );
  }

  return (
    <StyledButton className={type} onClick={onClick} {...rest}>
      {iconComponent}
      {children}
    </StyledButton>
  );
};

export default Button;
