import Button from "../../common/Button/Button";
import PipaImg from "../../../assets/Capitulo6Img/pipa.png";
import PipaNumsImg from "../../../assets/Capitulo6Img/pipa_nums.png";

import {
  TelaCenario,
  BalaoImagem,
  TextoBalao,
  CachorroOverlay,
  BotaoContainer,
  CHARACTER_IMAGES,
  BALAO_IMAGES,
  PipaStyled,
  PipaNumsStyled,
  EstrelaStyled,
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
  showPipa = false,
  showPipaNums = false,
  showEstrela = false,
  estrelaSrc = null,
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
          <TextoBalao $variant={balao.variant}>
            {balao.textParts
              ? balao.textParts.map((part, i) => (
                  <span key={i} style={{ color: part.color }}>
                    {part.text}
                  </span>
                ))
              : balao.text}
          </TextoBalao>
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

      {/*Pipa*/}
      {showPipa && <PipaStyled src={PipaImg} alt='pipa' />}
      {showPipaNums && <PipaNumsStyled src={PipaNumsImg} alt='pipa' />}

      {showEstrela && <EstrelaStyled src={estrelaSrc} alt='estrela' />}
    </TelaCenario>
  );
};

export default ChapterScreen;
