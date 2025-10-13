import { CloseOutlined, ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { StyledButton } from "./StyledButton";

const Button = ({ children, onClick, type, ...rest }) => {
  let iconComponent;
  if (type === "close" || type === "xis") {
    iconComponent = <CloseOutlined />;
  } else if (type === "avancar" || type === "setaFrente") {
    iconComponent = <ArrowRightOutlined />;
  } else if (type === "voltar" || type === "setaTras") {
    iconComponent = <ArrowLeftOutlined />;
  }

  if (type === "avancar" || type === "voltar" || type === "close") {
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
