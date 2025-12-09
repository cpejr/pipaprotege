import Button from "../../common/Button/Button";
import { TelaCenario, BotaoContainer, QuadroMensagem, PlaceholderDiv } from "./ReceitaStyles.js";

const Chapter8Receita = ({ onAdvance, onBack, content }) => {
  const BackButtonOrPlaceholder = onBack ? (
    <Button onClick={onBack} type='voltar' monochromatic>
      VOLTAR
    </Button>
  ) : (
    <PlaceholderDiv />
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
