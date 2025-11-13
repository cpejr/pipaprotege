import { useNavigate } from "react-router-dom";
import Chapter9Screen from "../../components/features/PadraoCap9/TelaCapitulo9";

const C9_Tela_06 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-07");
  };

  const textoDireita = (
    <>
      Por isso, sempre que sentir medo ou ficar triste, <strong>peça ajuda</strong> a um adulto de
      confiança ou um superamigo.
    </>
  );

  return (
    <Chapter9Screen
      textRight={textoDireita}
      onAdvance={handleAdvance}
      characterVariant='variant1'
    />
  );
};

export default C9_Tela_06;
