import { useNavigate } from "react-router-dom";
import Chapter8Screen from "../../components/features/PadraoCap8/TelaCapitulo8";

const C8_Tela_13 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-14");
  };

  const textoEsquerda = (
    <>
      Pronto! Agora você sabe alguns dos <strong>ingredientes</strong> essenciais para um bom bolo
      de cenoura.
    </>
  );

  const textoDireita = <>Vamos aprender a receita completa? Anote tudo.</>;

  return (
    <Chapter8Screen
      textLeft={textoEsquerda}
      textRight={textoDireita}
      onAdvance={handleAdvance}
      characterVariant='variant1'
    />
  );
};

export default C8_Tela_13;
