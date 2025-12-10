import { useNavigate } from "react-router-dom";
import Charpter7Screen2 from "../../components/features/PadraoCap7/Tela2Capitulo7.jsx";

const C7_Tela_10 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/final");
  };

    const title = (
    <>
      Escola
    </>
  );

    const text00 = (
    <>
      Procurar por:
    </>
  );

    const text01 = (
    <>
      Professores, diretores e funcionários.
    </>
  );

    const text10 = (
    <>
      Como funciona?
    </>
  );

    const text11 = (
    <>
     É um lugar onde você pode pedir sajuda sempre que estiver triste, com medo ou se algo estranho estiver acontecendo.
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

export default C7_Tela_10;