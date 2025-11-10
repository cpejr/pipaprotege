import styled from "styled-components";

const StyledTituloFlutuante = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  color: black;

  padding: 15px 40px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  font-size: 18px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  z-index: 50;
`;

const TituloFlutuante = ({ children }) => {
  return <StyledTituloFlutuante>{children}</StyledTituloFlutuante>;
};

export default TituloFlutuante;
