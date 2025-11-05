import { TelaInicial, StyleLink, StyleButton } from "./StyledFalas";
import fundo from "../../../assets/capitulo3/cap32.svg";
import Button from "../../../components/common/Button/Button";
import { Link } from "react-router-dom";

export default function Capitulo3() {
  return (
    <TelaInicial $bgImage={fundo}>
      <Button type='avancar' margin='700px 0 0 1000px' as={Link} to='/Cap3_3'>
        AVANÇAR
      </Button>
    </TelaInicial>
  );
}
