import Button from "../../common/Button/Button";

import {
  Tela,
  BalaoImagem,
  TextoBalao,
  CachorroOverlay,
  BotaoContainer,
  CHARACTER_IMAGES,
  BALAO_IMAGES,
  FundoElipse,
} from "./ChapterStyles.js";

const ChapterScreen = ({
  text,
  onAdvance,
  showButton = true,
  showOtherButton = false,
  onOtherButtonClick,
  characterVariant = "default",
  baloes = [],
  ellipseImage,
  children,
  backgroundImage,
}) => {
  const characterImage = CHARACTER_IMAGES[characterVariant];

  return (
    <Tela>
      {/* ELIPSE DE FUNDO */}
      {ellipseImage && <FundoElipse src={ellipseImage} $variant={characterVariant} />}

      {/*Cachorro*/}
      {characterImage && (
        <CachorroOverlay
          src={characterImage}
          alt={`Personagem Cachorro ${characterVariant}`}
          $variant={characterVariant}
        />
      )}

      {/*Quadro de desenho */}
      {children}

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
    </Tela>
  );
};

export default ChapterScreen;
