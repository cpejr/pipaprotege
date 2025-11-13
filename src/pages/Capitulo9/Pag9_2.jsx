import { useNavigate } from "react-router-dom";
import Chapter9Screen from "../../components/features/PadraoCap9/TelaCapitulo9";

const C9_Tela_02 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-03");
  };

  const textoEsquerda = (
    <>
      Esses são “<strong>bons ventos</strong>”, porque eles ajudam a pipa a voar pelo céu sem
      quebrar. Tem dias perfeitos para soltar pipa.
    </>
  );

  const textoDireita = (
    <>
      É quando o Sol está forte, o vento balança as folhas das árvores e o céu está bem azul. Então,
      a gente pega a pipa, corre, puxa a linha, tenta de novo.
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

export default C9_Tela_02;
