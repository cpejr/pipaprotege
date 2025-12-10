import { useNavigate } from "react-router-dom";
import Chapter8Receita from "../../components/features/PadraoCap8/TelaReceita";

const C8_Tela_18 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-19");
  };

  const handleBack = () => {
    navigate("/capitulo8/tela-17");
  };

  const receitaContent = (
    <>
      <h1>RECEITA DE BOLO DE CENOURA DO PIPA</h1>
      <h2>MODO DE FAZER:</h2>
      <ol>
        <li>
          5. Para a cobertura, pegue uma panela grande e em conjunto com o adulto junte o açúcar, o
          chocolate, a manteiga e o leite.
        </li>
        <li>
          6. Quando tudo estiver bem misturado, peça para o adulto colocar a panela no fogo e mexer
          até ficar grossa e cremosa.
        </li>
      </ol>
    </>
  );

  return <Chapter8Receita onAdvance={handleAdvance} onBack={handleBack} content={receitaContent} />;
};

export default C8_Tela_18;
