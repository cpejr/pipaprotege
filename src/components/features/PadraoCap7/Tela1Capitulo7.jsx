import Button from "../../common/Button/Button";
import{
    CHARACTER_IMAGES,
    TelaCenario,
    BalaoImagemEsq,
    BalaoImagemDir,
    TextoBalao,
    CachorroOverlay,
    BotaoContainer,
    QuadroMensagem,
}from "./Tela1Styles.js"

const Charpter7Screen = ({
  textLeft,
  textRight,
  onAdvance,
  onBack,
  showFrame = false,
  characterVariant = "variant1",
}) => {
  const characterImage = CHARACTER_IMAGES[characterVariant];
  const hasTextLeft = !!textLeft;
  const hasTextRight = !!textRight;

  return (
    <TelaCenario>
      {hasTextLeft && (
        <>
          {showFrame ? (
            <QuadroMensagem>
              <p>{textLeft}</p>
            </QuadroMensagem>
          ) : (
            <BalaoImagemEsq>
              <TextoBalao>{textLeft}</TextoBalao>
            </BalaoImagemEsq>
          )}
        </>
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


export default Charpter7Screen;