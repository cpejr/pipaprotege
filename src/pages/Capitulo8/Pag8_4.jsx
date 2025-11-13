import { useNavigate } from "react-router-dom";
import Chapter8Screen from "../../components/features/PadraoCap8/TelaCapitulo8";

const C8_Tela_04 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-05");
  };

  const textoEsquerda = (
    <>
      Isso sempre me ajuda a me sentir <strong>melhor!</strong> Eu tive uma ideia.... que tal você
      fazer isso também?
    </>
  );

  const textoDireita = (
    <>
      Nos dias em que estiver triste ou com a cabeça cheia de coisas, chame{" "}
      <strong>alguém de confiança</strong> para conversar e fazer algo que você gosta! Qual adulto
      você pode chamar?
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

export default C8_Tela_04;
