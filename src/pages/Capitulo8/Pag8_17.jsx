import { useNavigate } from "react-router-dom";
import Chapter8Receita from "../../components/features/PadraoCap8/TelaReceita";

const C8_Tela_17 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-18");
  };

  const handleBack = () => {
    navigate("/capitulo8/tela-16");
  };

  const receitaContent = (
    <>
      <h1>RECEITA DE BOLO DE CENOURA DO PIPA</h1>
      <h2>MODO DE FAZER:</h2>
      <ol>
        <li>
          3. Peça ajuda para um adulto despejar essa massa em uma tigela grande e, juntos, misturem
          com o açúcar, a farinha e o fermento.
        </li>
        <li>
          4. Quando tudo estiver misturado, ajude o adulto a colocar a massa na forma untada.
          Depois, peça para ele colocar no forno por 40 minutos.
        </li>
      </ol>
    </>
  );

  return <Chapter8Receita onAdvance={handleAdvance} onBack={handleBack} content={receitaContent} />;
};

export default C8_Tela_17;
