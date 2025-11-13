import { TelaInicial, StyleLink, ButtonDiv, Titulo } from "./StyledCap3";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
export default function C3_Introducao() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo3/tela-01");
  };
  return (
    <TelaInicial>
      <Titulo>CAPÍTULO 3</Titulo>
      <ButtonDiv>
        <Button type='iniciar' onClick={handleAdvance}>
          AVANÇAR
        </Button>
      </ButtonDiv>
    </TelaInicial>
  );
}
