import { useState } from "react";
import Button from "../../common/Button/Button";

import EsqueletoImg from "../../../assets/esqueletão.png";
import ImagemMenorImg from "../../../assets/pipaTexto.png";
import ModalButton from "../../common/Modal/ModalButton.jsx";

import {
  TelaCenario,
  TextoClicavelDireita,
  TextoClicavelEsquerda,
  ImagemEsquerda,
  ImagemDireita,
  BotaoContainer,
  CHARACTER_IMAGES,
} from "./ScreenBody.js";

const ScreenBody = ({
  text,
  onAdvance,
  showOtherButton = false,
  onOtherButtonClick,
  characterVariant = "default",
}) => {
  const [showModalDireita, setShowModalDireita] = useState(false);
  const [showModalEsquerda, setShowModalEsquerda] = useState(false);
  const characterImage = CHARACTER_IMAGES[characterVariant];

  return (
    <TelaCenario>
      {/* Textos clicáveis */}
      <TextoClicavelDireita onClick={() => setShowModalDireita(true)}>
        Mandíbula
      </TextoClicavelDireita>

      <TextoClicavelEsquerda onClick={() => setShowModalEsquerda(true)}>
        Fêmur
      </TextoClicavelEsquerda>

      {/* Modais */}
      {showModalDireita && (
        <ModalButton
          content={
            <>
              <strong style={{ color: "#8C52FF" }}>Mandíbula</strong>
              <br /> <br />
              <span style={{ color: "#9A9C9F" }}>
                Você sabia que a mandíbula é o único osso móvel da nossa face?
                <br />
                Muito legal, né?
              </span>
            </>
          }
          defaultOpen={true}
          showButton={false}
          buttonText='OK'
          onOk={() => setShowModalDireita(false)}
        />
      )}

      {showModalEsquerda && (
        <ModalButton
          content={
            <>
              <strong style={{ color: "#8C52FF" }}>Fêmur</strong>
              <br /> <br />
              <span style={{ color: "#9A9C9F" }}>
                Você sabia que o fêmur é o maior osso do nosso corpo? Ele ocupa toda a extensão das
                nossas coxas!
                <br />
              </span>
            </>
          }
          defaultOpen={true}
          showButton={false}
          buttonText='OK'
          onOk={() => setShowModalEsquerda(false)}
        />
      )}

      {/* Imagens */}
      <ImagemEsquerda src={EsqueletoImg} />
      <ImagemDireita src={ImagemMenorImg} />

      {/* Botões inferiores */}
      <BotaoContainer>
        {showOtherButton && (
          <Button type='voltar' onClick={onOtherButtonClick}>
            AGORA NÃO
          </Button>
        )}

        {onAdvance && (
          <Button type='avancar' onClick={onAdvance}>
            AVANÇAR
          </Button>
        )}
      </BotaoContainer>
    </TelaCenario>
  );
};

export default ScreenBody;
