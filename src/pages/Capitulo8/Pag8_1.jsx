import { useNavigate } from "react-router-dom";
import Chapter8Screen from "../../components/features/PadraoCap8/TelaCapitulo8";

const C8_Tela_01 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo8/tela-02");
  };

  const textoEsquerda = (
    <>
      Nem todos os dias dá pra jogar pipa. Tem dias em que o céu fica escuro e cheio de nuvens
      cinzas e grandes.
    </>
  );

  const textoDireita = (
    <>
      Até parece que o dia tá <strong>triste</strong>. Logo depois começa a chover. É como se o dia
      estivesse <strong>chorando</strong>.
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

export default C8_Tela_01;
