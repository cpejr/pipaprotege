import styled from "styled-components";
export const RiddleContentWrapper = styled.div`
  position: absolute;
  bottom: 25%;
  padding: 10px 10px 10px 0px;
  font-family: Arial, sans-serif;
  color: black;
  width: 70%;
  height: 70vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
`;

export const QuestionText = styled.p`
  font-size: 25px;
  position: absolute;
  width: 40px;
  height: 40px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 25px;
  width: 100%;
  font-weight: 500;
  padding-left: 20px;
  padding-right: 20px;
`;

export const NumberTag = styled.div`
  position: absolute;
  ${(props) => `top: ${props.top || "5%"};`}
  ${(props) => `left: ${props.left || "8%"};`}
  width: 40px;
  height: 40px;
  background-color: #64f5a7;
  border-radius: 5px;
  transform: rotate(45deg);

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    color: black;
    font-weight: bold;
    font-size: 30px;
  }
`;
