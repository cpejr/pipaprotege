import React from "react";
import { StyledLinkButton } from "./StyledLinkButton";

const LinkButton = ({ to, children, ...rest }) => {
  return (
    <StyledLinkButton to={to} {...rest}>
      {children}
    </StyledLinkButton>
  );
};

export default LinkButton;
