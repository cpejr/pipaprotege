import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import { TelaCenario, BotaoContainer, CharadaGrid, CharadaBotao } from "./Pag13Styled.js";

const C2_Tela_13 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo2/tela-23");
  };

  const handleCharadaClick = (numeroBotao) => {
    const numeroTela = 13 + numeroBotao;
    navigate(`/capitulo2/tela-${numeroTela}`);
  };

  const charadas = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <TelaCenario>
      <CharadaGrid>
        {charadas.map((numero) => (
          <CharadaBotao key={numero} onClick={() => handleCharadaClick(numero)}>
            {numero}
          </CharadaBotao>
        ))}
      </CharadaGrid>

      <BotaoContainer>
        <Button onClick={handleAdvance} type='avancar'>
          AVANÇAR
        </Button>
      </BotaoContainer>
    </TelaCenario>
  );
};

export default C2_Tela_13;
