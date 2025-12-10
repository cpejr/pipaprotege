import Button from "../../common/Button/Button";

import {
  TelaCenario,
  Titulo,
  Container,
  Linha,
  TextoQuadrado,
  TextoLado,
  BotaoContainer,
  Quadrado,
} from "./Tela2Style";

const Charpter7Screen2 = ({ title, text00, text01, text10, text11, onAdvance }) => {
  return (
    <TelaCenario>
      <Titulo>{title}</Titulo>
      <Container>
        <Linha>
          <Quadrado>
            <TextoQuadrado>{text00}</TextoQuadrado>
          </Quadrado>
          <TextoLado>{text01}</TextoLado>
        </Linha>

        <Linha>
          <Quadrado>
            <TextoQuadrado>{text10}</TextoQuadrado>
          </Quadrado>
          <TextoLado>{text11}</TextoLado>
        </Linha>
      </Container>

      <BotaoContainer>
        <Button onClick={onAdvance} type='avancar'>
          AVANÇAR
        </Button>
      </BotaoContainer>
    </TelaCenario>
  );
};

export default Charpter7Screen2;
