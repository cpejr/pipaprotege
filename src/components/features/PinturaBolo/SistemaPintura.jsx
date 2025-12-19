import { useState, useCallback } from "react";
import Button from "../../common/Button/Button";
import DesenhoDoBolo from "./PinturaBolo";
import {
  PinturaContainer,
  DesenhoContainer,
  ControlsContainer,
  ActionButtons,
  ColorPallete,
  ControlButton,
  ColorSwatch,
  Instructions,
} from "./PinturaStyles";

const COLORS = [
  { name: "laranja", color: "#e27d4d" },
  { name: "marrom", color: "#623b01" },
  { name: "rosa", color: "#ec55c6" },
  { name: "verde", color: "#6caf5c" },
  { name: "amarelo", color: "#ecc455" },
  { name: "vermelho", color: "#c24e54" },
  { name: "azul", color: "#799fd5" },
  { name: "roxo", color: "#8660d0" },
  { name: "branco", color: "#ffffff" },
  { name: "preto", color: "#000000" },
];

const INITIAL_COLORS = {
  suporte_base: "#d9d9d9",
  corpo_principal: "#d9d9d9",
  cobertura_superior: "#d9d9d9",
  glace_escorrendo_L: "#d9d9d9",
  glace_escorrendo_R: "#d9d9d9",
  centro_buraco: "#d9d9d9",
};

const SistemaPintura = ({ onSave }) => {
  const [corSelecionada, setCorSelecionada] = useState(COLORS[0].color);
  const [coresDoBolo, setCoresDoBolo] = useState(INITIAL_COLORS);
  const [history, setHistory] = useState([INITIAL_COLORS]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const pintarParte = useCallback(
    (parteId) => {
      const newCores = {
        ...coresDoBolo,
        [parteId]: corSelecionada,
      };

      if (newCores[parteId] === coresDoBolo[parteId]) return;

      setCoresDoBolo(newCores);

      const newHistory = history.slice(0, historyIndex + 1);
      setHistory([...newHistory, newCores]);
      setHistoryIndex(historyIndex + 1);
    },
    [coresDoBolo, corSelecionada, history, historyIndex]
  );

  const handleColorChange = useCallback((colorHex) => {
    setCorSelecionada(colorHex);
  }, []);

  const handleClear = useCallback(() => {
    setCoresDoBolo(INITIAL_COLORS);

    const newHistory = [INITIAL_COLORS];
    setHistory(newHistory);
    setHistoryIndex(0);
  }, []);

  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setCoresDoBolo(history[newIndex]);
      setHistoryIndex(newIndex);
    }
  }, [history, historyIndex]);

  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setCoresDoBolo(history[newIndex]);
      setHistoryIndex(newIndex);
    }
  }, [history, historyIndex]);

  const handleSave = () => {
    if (onSave) {
      onSave(coresDoBolo);
    }
  };

  return (
    <PinturaContainer>
      <Instructions>
        PINTE SEU BOLO DE CENOURA
        <br />
        DEPOIS CLIQUE EM "OK" PARA SALVAR
      </Instructions>

      <DesenhoContainer>
        <DesenhoDoBolo cores={coresDoBolo} onParteClick={pintarParte} />
      </DesenhoContainer>

      <ControlsContainer>
        <ActionButtons>
          <ColorPallete>
            {COLORS.map(({ name, color }) => (
              <ColorSwatch
                key={name}
                color={color}
                isSelected={corSelecionada === color}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </ColorPallete>

          <ControlButton onClick={handleUndo} disabled={historyIndex === 0}>
            desfazer
          </ControlButton>
          <ControlButton onClick={handleRedo} disabled={historyIndex === history.length - 1}>
            refazer
          </ControlButton>
          <ControlButton onClick={handleClear}>apagar tudo</ControlButton>
        </ActionButtons>

        <Button onClick={handleSave} type='ok' key='ok'>
          OK
        </Button>
      </ControlsContainer>
    </PinturaContainer>
  );
};

export default SistemaPintura;
