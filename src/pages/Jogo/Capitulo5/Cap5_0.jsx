import { TelaInicial, StyleLink, StyleButton } from "./StyledCap5";
import fundo from "../../../assets/capitulo5/cap5_0.svg";
import { Link } from "react-router-dom";
export default function Capitulo5() {
  return (
    <TelaInicial bgImage={fundo}>
      <StyleLink to='/Cap5_1' marginTop='45px'>
        <StyleButton bgColor='#A367F7' borderColor='white' color='white'>
          INICIAR
        </StyleButton>
      </StyleLink>
    </TelaInicial>
  );
}
