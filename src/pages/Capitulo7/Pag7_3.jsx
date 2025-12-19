import { useNavigate } from "react-router-dom";
import Chapter7Screen from "../../components/features/PadraoCap7/Tela1Capitulo7.jsx";

const C7_Tela_03 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-04");
  };

  const textoEsquerda = (
    <>
      Viu só? Você não está sozinho! Se alguma coisa deixar você triste, com medo, ou se algo estranho procure e peça ajuda.
    </>
  );

  const textoDireita = (
    <>
      E, se você não souber como fazer isso, peça para um adulto em quem você confiar para ajudar você.
    </>
  );

  return (
    <Chapter7Screen
      textLeft={textoEsquerda}
      textRight={textoDireita}
      onAdvance={handleAdvance}
      characterVariant='variant1'
    />
  );
};

export default C7_Tela_03;