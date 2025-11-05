import { TelaInicial, StyleLink, StyleButton } from "./StyledCap3";
import { Link } from "react-router-dom";
export default function Capitulo3() {
  return (
    <TelaInicial>
      <StyleLink to='/Cap3_1' marginTop='45px'>
        <StyleButton bgColor='#A367F7' borderColor='white' color='white'>
          INICIAR
        </StyleButton>
      </StyleLink>
    </TelaInicial>
  );
}
