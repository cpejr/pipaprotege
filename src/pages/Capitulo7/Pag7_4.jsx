import { useNavigate } from "react-router-dom";
import Chapter7Screen from "../../components/features/PadraoCap7/Tela1Capitulo7.jsx";

const C7_Tela_04 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-05");
  };

  const textoEsquerda = (
    <>
      Agora vem a parte mais legal! Você vai conhecer os guias dos super-amigos!
    </>
  );

  return (
    <Chapter7Screen
      textLeft={textoEsquerda}
      onAdvance={handleAdvance}
      characterVariant='variant1'
    />
  );
};

export default C7_Tela_04;