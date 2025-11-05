import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: #6ed1e2;

  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const BackgroundAzul = ({ children }) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default BackgroundAzul;
