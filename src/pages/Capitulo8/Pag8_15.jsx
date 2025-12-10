import { useNavigate } from "react-router-dom";
import Chapter8Receita from "../../components/features/PadraoCap8/TelaReceita";

const C8_Tela_15 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-16");
  };

  const handleBack = () => {
    navigate("/capitulo8/tela-14");
  };

  const receitaContent = (
    <>
      <h1>RECEITA DE BOLO DE CENOURA DO PIPA</h1>
      <h2>INGREDIENTES PARA A COBERTURA:</h2>
      <ul>
        <li>1/2 xícara de açúcar</li>
        <li>1/2 xícara de chocolate em pó</li>
        <li>2 colheres de sopa de manteiga</li>
        <li>2 xícaras de leite</li>
      </ul>
    </>
  );

  return <Chapter8Receita onAdvance={handleAdvance} onBack={handleBack} content={receitaContent} />;
};

export default C8_Tela_15;
