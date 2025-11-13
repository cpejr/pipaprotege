import { useNavigate } from "react-router-dom";
import Chapter9Screen from "../../components/features/PadraoCap9/TelaCapitulo9";

const C9_Tela_05 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-06");
  };

  const textoEsquerda = (
    <>
      A culpa nunca é sua. Nessas horas difíceis, quando está com medo ou triste, é importante
      lembrar dos “<strong>bons ventos</strong>”!
    </>
  );

  const textoDireita = (
    <>
      Esses bons ventos são os seus direitos, como o direito de brincar, o direito de ser protegido
      e o direito de ser cuidado. São eles que vão ajudar você a se sentir <strong>seguro</strong> e
      a voar alto!
    </>
  );

  return (
    <Chapter9Screen
      textLeft={textoEsquerda}
      textRight={textoDireita}
      onAdvance={handleAdvance}
      characterVariant='variant2'
    />
  );
};

export default C9_Tela_05;
