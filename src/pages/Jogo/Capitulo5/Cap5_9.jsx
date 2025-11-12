import { TelaInicial, Container, InstructionText, InputField, OkButton } from "./StyledCap5";
import fundo from "../../../assets/capitulo5/cap5_9.svg";
import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export default function Capitulo5() {
  return (
    <TelaInicial bgImage={fundo}>
      <Container position='absolute' bottom='-100px' width='950px' height='250px' zIndex='1000'>
        <InstructionText>
          DIGITE AQUI SUA RESPOSTA DEPOIS CLIQUE EM "OK" PARA SALVAR{" "}
        </InstructionText>

        <InputField placeholder='Palavra' />
        <OkButton>OK</OkButton>
      </Container>
    </TelaInicial>
  );
}
