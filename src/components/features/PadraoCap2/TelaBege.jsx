import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: #d0c2a9;

  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const BackgroundBege = ({ children }) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default BackgroundBege;
