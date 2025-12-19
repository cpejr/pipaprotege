import { useNavigate } from "react-router-dom";
import Chapter8Screen from "../../components/features/PadraoCap8/TelaCapitulo8";

const C8_Tela_20 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-21");
  };

  const textoEsquerda = (
    <>
      Atenção! Sabe quando o coração bate forte de medo? Isso pode acontecer se alguém pedir para
      ver você <strong>sem roupa</strong> ou tocar suas <strong>partes íntimas</strong>.
    </>
  );

  const textoDireita = (
    <>
      Se isso acontecer, <strong>peça ajuda rápido!</strong> Ligue para o 190 e fale com um
      superamigo. Eles estão lá para proteger você!
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

export default C8_Tela_20;
