import { useNavigate } from "react-router-dom";
import Chapter8Receita from "../../components/features/PadraoCap8/TelaReceita";

const C8_Tela_16 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-17");
  };

  const handleBack = () => {
    navigate("/capitulo8/tela-15");
  };

  const receitaContent = (
    <>
      <h1>RECEITA DE BOLO DE CENOURA DO PIPA</h1>
      <h2>MODO DE FAZER:</h2>
      <ol>
        <li>1. Comece pedindo ajuda para o adulto para descascar as cenouras para você.</li>
        <li>
          2. Depois, ajude o adulto a colocar as cenouras, os ovos e o óleo no liquidificador. Bata
          tudo por 3 minutos.
        </li>
      </ol>
    </>
  );

  return <Chapter8Receita onAdvance={handleAdvance} onBack={handleBack} content={receitaContent} />;
};

export default C8_Tela_16;
