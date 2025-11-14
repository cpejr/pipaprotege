import { TelaInicial, Container, DivText, StyledImage, Texto } from "./StyledPerguntas";

import num1 from "./../../assets/Capitulo5Img/Perguntas/6.png";
import corpo from "./../../assets/Capitulo5Img/Perguntas/fotos.png";
import palavra from "./../../assets/Capitulo5Img/Perguntas/palavra6.png";
import { useNavigate } from "react-router-dom";
import InputModal from "../../components/common/Modal/InputModal";
import ModalButton from "../../components/common/Modal/ModalButton";
import { useState } from "react";

export default function C5_Tela_09() {
  const navigate = useNavigate();
  const nextPath = "/capitulo5/tela-10";
  const [showOutroModal, setShowOutroModal] = useState(false);
  const placeholderText = 'DIGITE AQUI SUA RESPOSTA\nDEPOIS CLIQUE EM "OK" PARA SALVAR';
  const respostaCorreta = "FOTOS";
  return (
    <TelaInicial>
      <Container>
        <DivText>
          <div>
            <StyledImage src={num1} />
          </div>
        </DivText>

        <DivText>
          <div>
            <StyledImage src={corpo} />
          </div>
        </DivText>

        <DivText>
          <div>
            <StyledImage src={palavra} />
          </div>
        </DivText>

        <DivText>
          <div>
            <InputModal
              defaultOpen={true}
              showButton={false}
              initialPlaceholder={placeholderText}
              nextPath={nextPath}
              isBottomPositioned={true}
              correctAnswer={respostaCorreta}
              onOk={() => setShowOutroModal(true)} //add
            />
          </div>
        </DivText>

        {showOutroModal && (
          <ModalButton
            content={
              <>
                {" "}
                Não é legal quando alguém pede para tirar <strong>fotos</strong> ou fazer vídeos de
                você sem roupa.
              </>
            }
            defaultOpen={true}
            showButton={false}
            buttonText='OK'
            onOk={() => navigate(nextPath)}
          />
        )}
      </Container>
    </TelaInicial>
  );
}
