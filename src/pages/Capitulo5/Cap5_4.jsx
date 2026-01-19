import { TelaInicial, Container, DivText, StyledImage, Texto } from "./StyledPerguntas";
import num1 from "./../../assets/Capitulo5Img/Perguntas/1.png";
import corpo from "./../../assets/Capitulo5Img/Perguntas/corpo.png";
import palavra from "./../../assets/Capitulo5Img/Perguntas/palavra.png";
import { useNavigate } from "react-router-dom";
import InputModal from "../../components/common/Modal/InputModal";

import { useState } from "react";
import ModalButton from "../../components/common/Modal/ModalButton";

export default function C5_Tela_04() {
  const navigate = useNavigate();
  const nextPath = "/capitulo5/tela-05";

  const [showOutroModal, setShowOutroModal] = useState(false);

  const placeholderText = 'DIGITE AQUI SUA RESPOSTA\nDEPOIS CLIQUE EM "OK" PARA SALVAR';
  const respostaCorreta = "CORPO";

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
                Não é legal quando alguém faz perguntas sobre seu <strong>corpo</strong> e isso faz
                você sentir incômodo.
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
