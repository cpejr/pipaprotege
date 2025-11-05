import styled from "styled-components";

export const CanvasContainer = styled.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 14 / 10;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const StyledSketchCanvas = styled.div`
  flex-grow: 1;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 10px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorPallete = styled.div`
  display: flex;
  margin-right: 20px;
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

  &.eraser-icon::after {
    content: "X";
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Instructions = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ccc;
  font-size: 18px;
  text-align: center;
  pointer-events: none;
  line-height: 1.5;
`;
