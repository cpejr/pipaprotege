import React from "react";
import { StyledInput } from "./StyledInputField";

const InputField = ({ placeholder, status, ...rest }) => {
  return <StyledInput placeholder={placeholder} status={status} {...rest} />;
};

export default InputField;
