import { useNavigate } from "react-router-dom";
import Chapter8Screen from "../../components/features/PadraoCap8/TelaCapitulo8";

const C8_Tela_06 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-07");
  };

  const textoEsquerda = (
    <>
      E lembre-se: depois da chuva, o Sol sempre <strong>volta a brilhar!</strong>
    </>
  );

  const textoDireita = (
    <>
      Ah! Se precisar, tenho uma <strong>receita</strong> do meu bolo delicioso favorito. Mas antes
      que tal um jogo?
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

export default C8_Tela_06;
