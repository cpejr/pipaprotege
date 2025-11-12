import { TelaInicial, Container, InstructionText, InputField, OkButton } from "./StyledCap5";
import fundo from "../../../assets/capitulo5/cap5_4.svg";
import { useState } from "react";
import modalImage from "../../../assets/capitulo5/modal1.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CenterImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;
  z-index: 2000;
`;

export default function Capitulo5() {
  const [showImage, setShowImage] = useState(false);
  const navigate = useNavigate();

  const handleOkClick = () => {
    setShowImage(true); // mostra a imagem
  };

  const handleNextPage = () => {
    navigate("/Cap5_4"); // altera para a próxima página desejada
  };

  return (
    <TelaInicial bgImage={fundo}>
      <Container position='absolute' bottom='-100px' width='950px' height='250px' zIndex='1000'>
        <InstructionText>
          DIGITE AQUI SUA RESPOSTA DEPOIS CLIQUE EM "OK" PARA SALVAR{" "}
        </InstructionText>

        <InputField placeholder='Palavra' />
        <OkButton onClick={handleOkClick}>OK</OkButton>
      </Container>
      {showImage && <CenterImage src={modalImage} alt='Imagem Central'></CenterImage>}
    </TelaInicial>
  );
}
