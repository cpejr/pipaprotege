import { TelaInicial, ButtonDiv, Titulo } from "./StyledCap6";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";

export default function C6_Introcao() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo6/tela-01");
  };
  return (
    <TelaInicial>
      <Titulo>CAPÍTULO 6</Titulo>
      <ButtonDiv>
        <Button type='iniciar' onClick={handleAdvance}>
          INICIAR
        </Button>
      </ButtonDiv>
    </TelaInicial>
  );
}
