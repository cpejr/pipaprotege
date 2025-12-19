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

const ProtectionLayout = ({
  conteudoBalao,
  onAdvance,
  characterVariant = "variant1",
  children,
}) => {
  const characterImage = CHARACTER_IMAGES[characterVariant];

  return (
    <TelaCenarioProtecao>
      {conteudoBalao && (
        <BalaoImagemProtecao>
          <TextoBalaoProtecao>{conteudoBalao}</TextoBalaoProtecao>
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
