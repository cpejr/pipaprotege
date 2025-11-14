import Button from "../../common/Button/Button";
import {
  CenaEncerramento,
  BalaoImagemDir,
  TextoBalao,
  TextoFIM,
  CachorroOverlay,
  BotaoContainer,
  CHARACTER_IMAGES,
} from "./Tela9Styles";

const TelaEnding = ({ text, onAdvance, characterVariant = "variant2", sceneVariant = "1" }) => {
  const characterImage = CHARACTER_IMAGES[characterVariant];
  const isFinalScene = sceneVariant === "3";

  return (
    <CenaEncerramento $variant={sceneVariant}>
      {isFinalScene ? (
        <TextoFIM>FIM</TextoFIM>
      ) : (
        <>
          {text && (
            <BalaoImagemDir>
              <TextoBalao>{text}</TextoBalao>
            </BalaoImagemDir>
          )}

          {characterImage && (
            <CachorroOverlay src={characterImage} alt={`Personagem Cachorro ${characterVariant}`} />
          )}

          {onAdvance && (
            <BotaoContainer>
              <Button onClick={onAdvance} type='avancar'>
                AVANÇAR
              </Button>
            </BotaoContainer>
          )}
        </>
      )}
    </CenaEncerramento>
  );
};

export default TelaEnding;
