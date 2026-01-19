import { useNavigate } from "react-router-dom";
import Chapter7Screen from "../../components/features/PadraoCap7/Tela1Capitulo7.jsx";

const C7_Tela_01 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-02");
  };

  const textoEsquerda = (
    <>
      Existem adultos que além de soltar pipa gostam de ajudar crianças e adolescentes a se protegerem
    </>
  );

  const textoDireita = (
    <>
      É verdade! Eles ajudam crianças e adolescentes a ficarem seguros e protegidos.
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

export default C7_Tela_01;

