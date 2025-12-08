import { useNavigate } from "react-router-dom";
import Charpter7Screen2 from "../../components/features/PadraoCap7/Tela2Capitulo7.jsx";

const C7_Tela_07 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-08");
  };

    const title = (
    <>
      Conselho Tutelar
    </>
  );

    const text00 = (
    <>
      Procurar por:
    </>
  );

    const text01 = (
    <>
      Conselheiros tutelares
    </>
  );

    const text10 = (
    <>
      Como funciona?
    </>
  );

    const text11 = (
    <>
      Lugar aonde você pode ir para pedir ajuda quando algúem não estiver respeitando os seus direitos de criança ou adolescente.
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

export default C7_Tela_07;