import Button from "../../common/Button/Button";
import {
  TelaCenarioProtecao,
  BalaoImagemProtecao,
  TextoBalaoProtecao,
  CachorroOverlayProtecao,
  BotaoContainerProtecao,
  QuadroRoxoSlot,
  CHARACTER_IMAGES,
} from "./PadraoProtecaoStyles.js";

const ProtectionLayout = ({ text, onAdvance, characterVariant = "variant1", children }) => {
  const characterImage = CHARACTER_IMAGES[characterVariant];

  return (
    <TelaCenarioProtecao>
      {text && (
        <BalaoImagemProtecao>
          <TextoBalaoProtecao>{text}</TextoBalaoProtecao>
        </BalaoImagemProtecao>
      )}

      {characterImage && (
        <CachorroOverlayProtecao
          src={characterImage}
          alt={`Personagem Cachorro ${characterVariant}`}
        />
      )}

      <QuadroRoxoSlot>{children}</QuadroRoxoSlot>

      <BotaoContainerProtecao>
        {onAdvance && (
          <Button onClick={onAdvance} type='avancar'>
            AVANÇAR
          </Button>
        )}
      </BotaoContainerProtecao>
    </TelaCenarioProtecao>
  );
};

export default ProtectionLayout;
