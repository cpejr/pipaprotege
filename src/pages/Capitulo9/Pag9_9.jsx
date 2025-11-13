import { useNavigate } from "react-router-dom";
import Chapter9Screen from "../../components/features/PadraoCap9/TelaCapitulo9";

const C9_Tela_09 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo9/tela-10");
  };

  const textoEsquerda = (
    <>
      Antes da gente se despedir, que tal me contar o que você <strong>mais gostou</strong> do jogo?
    </>
  );

  const textoDireita = (
    <>Você pode escrever ou desenhar o que fez seu coração ficar leve e quentinho!</>
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

export default C9_Tela_09;
