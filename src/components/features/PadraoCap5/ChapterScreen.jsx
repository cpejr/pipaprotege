import Button from "../../common/Button/Button";

import {
  TelaCenario,
  BalaoImagem,
  TextoBalao,
  CachorroOverlay,
  BotaoContainer,
  CHARACTER_IMAGES,
  BALAO_IMAGES,
} from "./ChapterStyles.js";

const ChapterScreen = ({
  text,
  onAdvance,
  showButton = true,
  showOtherButton = false,
  onOtherButtonClick,
  characterVariant = "default",
  baloes = [],
  backgroundImage,
}) => {
  const characterImage = CHARACTER_IMAGES[characterVariant];

  return (
    <TelaCenario $background={backgroundImage}>
      {/*Cachorro*/}
      {characterImage && (
        <CachorroOverlay
          src={characterImage}
          alt={`Personagem Cachorro ${characterVariant}`}
          $variant={characterVariant}
        />
      )}

      {/*Balões*/}
      {baloes.map((balao, index) => (
        <BalaoImagem key={index} $variant={balao.variant} $image={BALAO_IMAGES[balao.variant]}>
          <TextoBalao $variant={balao.variant}>{balao.text}</TextoBalao>
        </BalaoImagem>
      ))}

      {/*Botão*/}
      {showButton && onAdvance && (
        <BotaoContainer>
          <Button onClick={onAdvance} type='avancar'>
            AVANÇAR
          </Button>
        </BotaoContainer>
      )}
    </TelaCenario>
  );
};

export default ChapterScreen;
