import { useNavigate } from "react-router-dom";
import Chapter7Screen from "../../components/features/PadraoCap7/Tela1Capitulo7.jsx";

const C7_Tela_02 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-03");
  };

  const textoEsquerda = (
    <>
      Eles são como super-amigos, sempre por perto para ajudar
    </>
  );

  const textoDireita = (
    <>
      Eles estão na Escola, no CRAS, no Conselho Tutelar e na delegacia. E o melhor: dá até para falar com elas no telefone!
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

export default C7_Tela_02;