import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: #d75821;

  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const BackgroundLaranja = ({ children }) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default BackgroundLaranja;
