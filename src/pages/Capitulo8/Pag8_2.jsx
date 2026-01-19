import { useNavigate } from "react-router-dom";
import Chapter8Screen from "../../components/features/PadraoCap8/TelaCapitulo8";

const C8_Tela_02 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-03");
  };

  const textoEsquerda = (
    <>
      Às vezes a gente fica assim também. O coração fica cinza, parece que tem uma{" "}
      <strong>tempestade</strong> na cabeça.
    </>
  );

  const textoDireita = (
    <>
      Nesses dias, a gente nem parece com a gente. Dá vontade de gritar, brigar e chorar. Não
      sabemos o que está acontecendo.
    </>
  );

  return (
    <Chapter8Screen
      textLeft={textoEsquerda}
      textRight={textoDireita}
      onAdvance={handleAdvance}
      characterVariant='variant1'
    />
  );
};

export default C8_Tela_02;
