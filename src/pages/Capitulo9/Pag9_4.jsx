import { useNavigate } from "react-router-dom";
import Chapter9Screen from "../../components/features/PadraoCap9/TelaCapitulo9";

const C9_Tela_04 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-05");
  };

  const textoEsquerda = (
    <>
      Essas coisas podem acontecer com qualquer um, até com você. E quando isso acontece, a culpa
      não é sua. Se você quebrar algo sem querer, <strong>a culpa não é sua</strong>.
    </>
  );

  const textoDireita = (
    <>
      Se alguém fizer um vídeo de você sem roupa, <strong>a culpa não é sua</strong>. Se alguém
      tocar em você de um jeito estranho e pedir segredo, <strong>a culpa também não é sua</strong>.
    </>
  );

  return (
    <Chapter9Screen
      textLeft={textoEsquerda}
      textRight={textoDireita}
      onAdvance={handleAdvance}
      characterVariant='variant2'
    />
  );
};

export default C9_Tela_04;
