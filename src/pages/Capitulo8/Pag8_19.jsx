import { useNavigate } from "react-router-dom";
import Chapter8Receita from "../../components/features/PadraoCap8/TelaReceita";

const C8_Tela_19 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-20");
  };

  const handleBack = () => {
    navigate("/capitulo8/tela-18");
  };

  const receitaContent = (
    <>
      <h1>RECEITA DE BOLO DE CENOURA DO PIPA</h1>
      <h2>MODO DE FAZER:</h2>
      <ol>
        <li>
          7. Quando o bolo assar peça ao adulto para tirar ele do forno com cuidado e, juntos,
          despejem a cobertura.
        </li>
        <li>
          8. Dica: Enquanto fazem o bolo que tal conversar sobre o que te deixa triste ou com medo?
          Isso ajuda a deixar o coração leve e quentinho.
        </li>
      </ol>
    </>
  );

  return <Chapter8Receita onAdvance={handleAdvance} onBack={handleBack} content={receitaContent} />;
};

export default C8_Tela_19;
