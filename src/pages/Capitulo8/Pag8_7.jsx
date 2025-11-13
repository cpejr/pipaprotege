import { useNavigate } from "react-router-dom";
import Chapter8Screen from "../../components/features/PadraoCap8/TelaCapitulo8";

const C8_Tela_07 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-08");
  };

  const textoQuadro = (
    <>
      Para descobrir a receita do Pipa coloque a <strong>letra inicial</strong> de cada figura no
      lugar indicado e descubra o nome de alguns <strong>ingredientes</strong> essencias para o bolo
      de cenoura.
    </>
  );

  const textoDireita = null;

  return (
    <Chapter8Screen
      textLeft={textoQuadro}
      textRight={textoDireita}
      onAdvance={handleAdvance}
      characterVariant='variant1'
      showFrame={true}
    />
  );
};

export default C8_Tela_07;
