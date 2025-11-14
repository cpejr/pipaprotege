import Button from "../../common/Button/Button";
import {
  TelaCenario,
  BalaoImagemEsq,
  BalaoImagemDir,
  TextoBalao,
  CachorroOverlay,
  BotaoContainer,
  CHARACTER_IMAGES,
} from "./Tela9Styles.js";

const Chapter9Screen = ({
  textLeft,
  textRight,
  onAdvance,
  onBack,

  characterVariant = "variant1",
}) => {
  const characterImage = CHARACTER_IMAGES[characterVariant];
  const hasTextLeft = !!textLeft;
  const hasTextRight = !!textRight;

  return (
    <TelaCenario>
      {hasTextLeft && (
        <BalaoImagemEsq>
          <TextoBalao>{textLeft}</TextoBalao>
        </BalaoImagemEsq>
      )}

      {hasTextRight && (
        <BalaoImagemDir>
          <TextoBalao>{textRight}</TextoBalao>
        </BalaoImagemDir>
      )}

      {characterImage && (
        <CachorroOverlay src={characterImage} alt={`Personagem Cachorro ${characterVariant}`} />
      )}

      <BotaoContainer>
        {onBack && (
          <Button onClick={onBack} type='voltar'>
            VOLTAR
          </Button>
        )}

        {onAdvance && (
          <Button onClick={onAdvance} type='avancar'>
            AVANÇAR
          </Button>
        )}
      </BotaoContainer>
    </TelaCenario>
  );
};

export default Chapter9Screen;
