import { TelaInicial, StyleLink, ButtonDiv, Titulo } from "./StyledCap5";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";

export default function C5_Introcao() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo5/tela-01");
  };
  return (
    <TelaInicial>
      <Titulo>CAPÍTULO 5</Titulo>
      <ButtonDiv>
        <Button type='iniciar' onClick={handleAdvance}>
          INICIAR
        </Button>
      </ButtonDiv>
    </TelaInicial>
  );
}
