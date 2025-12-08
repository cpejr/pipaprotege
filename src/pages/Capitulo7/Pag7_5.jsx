import { useNavigate } from "react-router-dom";
import Charpter7Screen2 from "../../components/features/PadraoCap7/Tela2Capitulo7.jsx";

const C7_Tela_06 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-07");
  };

    const title = (
    <>
      Adulto de Confiança
    </>
  );

    const text00 = (
    <>
      Quem é?
    </>
  );

    const text01 = (
    <>
      Um adulto que se preocupa e cuida de você.
    </>
  );

    const text10 = (
    <>
      O que ele faz?
    </>
  );

    const text11 = (
    <>
      Ele vai escutar, dar apoio e ajudar no que você precisa.
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

export default C7_Tela_06;