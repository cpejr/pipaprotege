import { useNavigate } from "react-router-dom";
import Chapter9Screen from "../../components/features/PadraoCap9/TelaCapitulo9";

const C9_Tela_03 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-04");
  };

  const textoEsquerda = (
    <>
      Fazemos tudo o que temos que fazer. Mas mesmo assim, a pipa não voa. Sabe por quê? Porque não
      tinha “<strong>bons ventos</strong>” para ajudar a pipa a voar.
    </>
  );

  const textoDireita = (
    <>
      Quando o vento não ajuda, não importa o quanto a gente tente, a pipa não consegue voar. E{" "}
      <>
        <strong>a culpa não é da gente</strong>.
      </>{" "}
      Assim como esses dias, coisas ruins acontecem.
    </>
  );

  return (
    <Chapter9Screen
      textLeft={textoEsquerda}
      textRight={textoDireita}
      onAdvance={handleAdvance}
      characterVariant='variant3'
    />
  );
};

export default C9_Tela_03;
