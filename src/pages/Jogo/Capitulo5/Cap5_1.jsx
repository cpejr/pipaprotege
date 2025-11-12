import { TelaInicial, StyleLink, StyleButton } from "./StyledCap5";
import fundo from "../../../assets/capitulo5/cap5_1.svg";
import Button from "../../../components/common/Button/Button";

import { Link } from "react-router-dom";
export default function Capitulo5() {
  return (
    <TelaInicial bgImage={fundo}>
      <Button type='avancar' margin='740px 0 0 1080px' as={Link} to='/Cap5_2'>
        AVANÇAR
      </Button>
    </TelaInicial>
  );
}
