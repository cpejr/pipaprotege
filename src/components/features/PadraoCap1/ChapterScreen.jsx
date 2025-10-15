import Button from "../../common/Button/Button";

import {
  TelaCenario,
  TextoBalao,
  CachorroOverlay,
  BotaoContainer,
  CHARACTER_IMAGES,
} from "./Styles.js";

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
      <TextoBalao>{text}</TextoBalao>

      {characterImage && (
        <CachorroOverlay src={characterImage} alt={`Personagem Cachorro ${characterVariant}`} />
      )}

      <BotaoContainer>
        {showOtherButton && onOtherButtonClick && (
          <StyleLink as='div' onClick={onOtherButtonClick}>
            <StyleButton bgColor='#A367F7' borderColor='white' color='white'>
              Agora não
            </StyleButton>
          </StyleLink>
        )}

        {onAdvance && (
          <div style={{ width: 180, height: 60, display: "flex", alignItems: "center" }}>
            <Button onClick={onAdvance} type='avancar'>
              AVANÇAR
            </Button>
          </div>
        )}
      </BotaoContainer>
    </TelaCenario>
  );
};

export default ChapterScreen;
