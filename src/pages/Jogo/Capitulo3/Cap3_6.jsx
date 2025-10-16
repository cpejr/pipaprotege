import { TelaInicial, StyleLink, StyleButton } from "./StyledFalas";
import fundo from "../../../assets/capitulo3/cap36.svg";

export default function Capitulo3() {
  return (
    <TelaInicial bgImage={fundo}>
      <StyleLink to='/Cap3_7' marginTop='45px'>
        <StyleButton bgColor='#F5BD58' borderColor='#F5BD58' color='black'>
          AVANÇAR
        </StyleButton>
      </StyleLink>
    </TelaInicial>
  );
}
