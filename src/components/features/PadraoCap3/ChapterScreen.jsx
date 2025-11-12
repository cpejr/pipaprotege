import Button from "../../common/Button/Button";

import {
  TelaCenario,
  BalaoImagem,
  TextoBalao,
  CachorroOverlay,
  BotaoContainer,
  CHARACTER_IMAGES,
} from "./ChapterStyles.js";

const ChapterScreen = ({
  text,
  onAdvance,
  showOtherButton = false,
  onOtherButtonClick,
  characterVariant = "default",
}) => {
  const characterImage = CHARACTER_IMAGES[characterVariant];

  return (
    <TelaCenario>
      <BalaoImagem>
        <TextoBalao>{text}</TextoBalao>
      </BalaoImagem>

      {characterImage && (
        <CachorroOverlay src={characterImage} alt={`Personagem Cachorro ${characterVariant}`} />
      )}

      <BotaoContainer>
        {onAdvance && (
          <Button onClick={onAdvance} type='avancar'>
            AVANÇAR
          </Button>
        )}
      </BotaoContainer>
    </TelaCenario>
  );
};

export default ChapterScreen;
