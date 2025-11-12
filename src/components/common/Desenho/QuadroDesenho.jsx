import { useRef, useState, useCallback } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Button from "../Button/Button";
import {
  CanvasContainer,
  StyledSketchCanvas,
  ControlsContainer,
  ActionButtons,
  ColorPallete,
  ControlButton,
  ColorSwatch,
  Instructions,
} from "./StyledDesenho";

const COLORS = [
  { name: "eraser", color: "white", icon: true },
  { name: "red", color: "#dc3545" },
  { name: "gold", color: "#ffc107" },
  { name: "green", color: "#28a745" },
  { name: "blue", color: "#007bff" },
  { name: "black", color: "#343a40" },
];

const DesenhoComponent = ({ onSave }) => {
  const canvasRef = useRef(null);
  const [strokeColor, setStrokeColor] = useState(COLORS[5].color);
  const [isEraser, setIsEraser] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const handleUndo = useCallback(() => {
    canvasRef.current?.undo();
  }, []);

  const handleRedo = useCallback(() => {
    canvasRef.current?.redo();
  }, []);

  const handleClear = useCallback(() => {
    canvasRef.current?.clearCanvas();
    setShowInstructions(true);
  }, []);

  const handleColorChange = useCallback((colorName, colorHex) => {
    if (colorName === "eraser") {
      setIsEraser(true);
      setStrokeColor("white");
    } else {
      setIsEraser(false);
      setStrokeColor(colorHex);
    }
  }, []);

  const handleStroke = useCallback(() => {
    if (showInstructions) {
      setShowInstructions(false);
    }
  }, [showInstructions]);

  const handleSave = async () => {
    if (!canvasRef.current || !onSave) return;

    const dataUrl = await canvasRef.current.exportImage("png");
    onSave(dataUrl);
  };

  return (
    <CanvasContainer>
      {showInstructions && (
        <Instructions>
          FAÇA O SEU DESENHO AQUI
          <br />
          DEPOIS CLIQUE EM "OK" PARA SALVAR
        </Instructions>
      )}

      <StyledSketchCanvas>
        <ReactSketchCanvas
          ref={canvasRef}
          width='100%'
          height='100%'
          strokeWidth={isEraser ? 30 : 5}
          strokeColor={strokeColor}
          eraser={isEraser}
          canvasColor='white'
          allowOnlyPointerType='all'
          onStroke={handleStroke}
        />
      </StyledSketchCanvas>

      <ControlsContainer>
        <ActionButtons>
          <ColorPallete>
            {COLORS.map(({ name, color, icon }) => (
              <ColorSwatch
                key={name}
                color={color}
                isSelected={(isEraser && name === "eraser") || (!isEraser && strokeColor === color)}
                onClick={() => handleColorChange(name, color)}
                className={icon && "eraser-icon"}
              />
            ))}
          </ColorPallete>

          <ControlButton onClick={handleUndo}>desfazer</ControlButton>
          <ControlButton onClick={handleRedo}>refazer</ControlButton>
          <ControlButton onClick={handleClear}>apagar tudo</ControlButton>
        </ActionButtons>

        <Button onClick={handleSave} type='ok' key='ok'>
          OK
        </Button>
      </ControlsContainer>
    </CanvasContainer>
  );
};

export default DesenhoComponent;
