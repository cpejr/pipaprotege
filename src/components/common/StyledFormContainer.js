import styled from "styled-components";

export const StyledFormContainer = styled.div`
  width: 50vw;
  height: 60vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
    min-height: 50vh;
    padding: 20px;
  }
`;
