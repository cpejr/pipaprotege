import { TelaInicial, Container, DivText, StyledImage, Texto } from "./StyledPerguntas";

import num1 from "./../../assets/Capitulo5Img/Perguntas/4.png";
import corpo from "./../../assets/Capitulo5Img/Perguntas/intimo.png";
import palavra from "./../../assets/Capitulo5Img/Perguntas/palavra4.png";
import { useNavigate } from "react-router-dom";
import InputModal from "../../components/common/Modal/InputModal";

import ModalButton from "../../components/common/Modal/ModalButton";
import { useState } from "react";

export default function C5_Tela_07() {
  const navigate = useNavigate();
  const nextPath = "/capitulo5/tela-08";
  const [showOutroModal, setShowOutroModal] = useState(false);
  const placeholderText = 'DIGITE AQUI SUA RESPOSTA\nDEPOIS CLIQUE EM "OK" PARA SALVAR';
  const respostaCorreta = "ÍNTIMO";
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
                Não é legal quando alguém pede para tocar um local <strong>íntimo</strong> do seu
                corpo, mesmo que ela prometa presentes em troca.
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
