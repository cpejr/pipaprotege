import { TelaInicial, Container, InstructionText, InputField, OkButton } from "./StyledCap5";
import fundo from "../../../assets/capitulo5/cap5_2.svg";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
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
      <Container
        position='absolute'
        top='500px'
        right='30px'
        width='550px'
        height='250px'
        zIndex='1000'
      >
        <InstructionText>DIGITE AQUI O NOME DESSE ADULTO</InstructionText>

        <InputField placeholder='Nome completo' />
        <OkButton>OK</OkButton>
      </Container>

      <Button type='avancar' margin='740px 0 0 1080px' as={Link} to='/Cap5_3'>
        AVANÇAR
      </Button>
    </TelaInicial>
  );
}
