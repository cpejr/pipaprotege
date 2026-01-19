import { useNavigate } from "react-router-dom";
import Chapter8Screen from "../../components/features/PadraoCap8/TelaCapitulo8";

const C8_Tela_03 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-04");
  };

  const textoEsquerda = (
    <>
      E está tudo bem! Porque sentir essas coisas não é fácil. Sabia que você{" "}
      <strong>não precisa</strong> ficar sozinho quando tá triste?
    </>
  );

  const textoDireita = (
    <>
      Quando me sinto assim, gosto de chamar <strong>alguém de confiança</strong> para conversar e
      fazer um bolo de cenoura.
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

export default C8_Tela_03;
