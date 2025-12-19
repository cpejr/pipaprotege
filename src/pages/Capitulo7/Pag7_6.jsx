import { useNavigate } from "react-router-dom";
import Charpter7Screen2 from "../../components/features/PadraoCap7/Tela2Capitulo7.jsx";

const C7_Tela_06 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-07");
  };

    const title = (
    <>
      Delegacia
    </>
  );

    const text00 = (
    <>
      Procurar por:
    </>
  );

    const text01 = (
    <>
      Policiais e delegados.
    </>
  );

    const text10 = (
    <>
      O que ele faz?
    </>
  );

    const text11 = (
    <>
      Lugar aonde você poder ir para pedir ajuda e contar o que está acontecendo ou te deixando com medo.
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