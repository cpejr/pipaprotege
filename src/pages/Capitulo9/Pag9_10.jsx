import { useNavigate } from "react-router-dom";
import Chapter9Screen from "../../components/features/PadraoCap9/TelaCapitulo9";
import Button from "../../components/common/Button/Button";
import { BotoesEscolhaContainer } from "../../components/features/PadraoCap9/Tela9Styles";

const C9_Tela_10 = () => {
  const navigate = useNavigate();

  const handleDraw = () => {
    navigate("/capitulo9/tela-11_2");
  };

  const handleWrite = () => {
    navigate("/capitulo9/tela-11_1");
  };

  return (
    <>
      <Chapter9Screen characterVariant='variant2' />
      <BotoesEscolhaContainer>
        <Button onClick={handleDraw} type='iniciar'>
          DESENHAR
        </Button>
        <Button onClick={handleWrite} type='iniciar'>
          ESCREVER
        </Button>
      </BotoesEscolhaContainer>
    </>
  );
};

export default C9_Tela_10;
