import React from "react";
import styled from "styled-components";
import { CloseOutlined, ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { StyledButton } from "./StyledButton";

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
