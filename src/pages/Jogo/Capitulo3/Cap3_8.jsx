import { TelaInicial, StyleLink, StyleButton } from "./StyledFalas";
import fundo from "../../../assets/capitulo3/cap38.svg";
import Button from "../../../components/common/Button/Button";
import { Link } from "react-router-dom";

export default function Capitulo3() {
  return (
    <TelaInicial bgImage={fundo}>
      <Button type='avancar' margin='740px 0 0 1080px' as={Link} to='/Cap3_9'>
        AVANÇAR
      </Button>
    </TelaInicial>
  );
}
