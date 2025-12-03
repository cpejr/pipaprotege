import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import pag13 from "../../assets/Capitulo2/pag13.png";
import Button from "../../components/common/Button/Button";

const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${pag13});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const CharadaGrid = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  width: 550px;
  max-width: 100%;
  padding-bottom: 50px;
`;

const CharadaBotao = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;

  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 35px;

  font-size: 46px;
  font-weight: 700;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

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
