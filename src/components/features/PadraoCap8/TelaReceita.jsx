import Button from "../../common/Button/Button";
import { TelaCenario, BotaoContainer, QuadroMensagem } from "./ReceitaStyles.js";

const Chapter8Receita = ({ onAdvance, onBack, content }) => {
  const BackButtonOrPlaceholder = onBack ? (
    <Button onClick={onBack} type='voltar' monochromatic>
      VOLTAR
    </Button>
  ) : (
    <div style={{ width: "20vw", maxWidth: "350px", height: "70px" }}></div>
  );

  return (
    <TelaCenario>
      <QuadroMensagem>{content}</QuadroMensagem>
      <BotaoContainer>
        {BackButtonOrPlaceholder}
        {onAdvance && (
          <Button onClick={onAdvance} type='avancar' monochromatic>
            AVANÇAR
          </Button>
        )}
      </BotaoContainer>
    </TelaCenario>
  );
};

export default Chapter8Receita;
