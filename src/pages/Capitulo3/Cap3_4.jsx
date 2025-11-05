import { TelaInicial, StyleLink, StyleButton, ButtonDiv } from "./StyledFalas";
import fundo from "../../assets/capitulo3/cap34.svg";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
export default function Capitulo3() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/Cap3_5");
  };
  return (
    <TelaInicial bgImage={fundo}>
      <ButtonDiv>
        <Button type='avancar' onClick={handleAdvance}>
          AVANÇAR
        </Button>
      </ButtonDiv>
    </TelaInicial>
  );
}
