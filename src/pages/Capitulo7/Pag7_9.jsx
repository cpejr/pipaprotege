import { useNavigate } from "react-router-dom";
import Charpter7Screen2 from "../../components/features/PadraoCap7/Tela2Capitulo7.jsx";

const C7_Tela_08 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-09");
  };

    const title = (
    <>
      CRAS - Centro de Referência de Assistência Social
    </>
  );

    const text00 = (
    <>
      Procurar por:
    </>
  );

    const text01 = (
    <>
      Psicólogos, assistentes sociais e outras pessoas que ajudam famílias.
    </>
  );

    const text10 = (
    <>
      Como funciona?
    </>
  );

    const text11 = (
    <>
     Lugar onde você deve ir para pedir ajuda quando estiver passando por uma situação difícil com sua família, amigos ou vizinhos.
    </>
  );

  return (
    <Charpter7Screen2
      title={title}
      text00={text00}
      text01={text01}
      text10={text10}
      text11={text11}      
      onAdvance={handleAdvance}
    />
  );
};

export default C7_Tela_08;