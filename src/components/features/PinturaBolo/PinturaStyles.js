import styled from "styled-components";

export const PinturaContainer = styled.div`
  width: 100%;
  max-height: 900px;
  max-width: 900px;
  aspect-ratio: 14 / 10;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const DesenhoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 20px 10px 20px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorPallete = styled.div`
  display: flex;
  margin-right: 15px;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  padding: 0 8px;
  &:hover {
    text-decoration: underline;
  }
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const ColorSwatch = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "2px solid #000" : "2px solid transparent")};
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Instructions = styled.p`
  position: absolute;
  top: 5px;
  width: 100%;
  text-align: center;
  color: #9a9c9f;
  font-size: 16px;
  font-weight: bold;
  pointer-events: none;
`;
