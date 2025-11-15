import { useNavigate } from "react-router-dom";
import Chapter8Receita from "../../components/features/PadraoCap8/TelaReceita";

const C8_Tela_14 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-15");
  };

  const receitaContent = (
    <>
      <h1>RECEITA DE BOLO DE CENOURA DO PIPA</h1>
      <h2>INGREDIENTES PARA O BOLO:</h2>
      <ul>
        <li>3 cenouras médias</li>
        <li>3 ovos</li>
        <li>1 xícara de óleo</li>
        <li>2 xícaras de açúcar</li>
        <li>2 xícaras de farinha de trigo</li>
        <li>1 colher de sopa de fermento em pó</li>
      </ul>
    </>
  );

  return <Chapter8Receita onAdvance={handleAdvance} content={receitaContent} />;
};

export default C8_Tela_14;
