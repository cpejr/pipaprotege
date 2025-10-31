import { TelaInicial, StyleLink, StyleButton } from "./StyledCap5";
import fundo from "../../../assets/capitulo5/cap5_15.svg";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
export default function Capitulo5() {
  return (
    <TelaInicial bgImage={fundo}>
      <Button type='avancar' margin='740px 0 0 1080px' as={Link} to='/Cap5_16'>
        AVANÇAR
      </Button>
    </TelaInicial>
  );
}
