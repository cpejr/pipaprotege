import { useNavigate } from "react-router-dom";
import Charpter7Screen2 from "../../components/features/PadraoCap7/Tela2Capitulo7.jsx";

const C7_Tela_07 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo7/tela-08");
  };

    const title = (
    <>
      Disque 100 Disque Denúncia
    </>
  );

    const text00 = (
    <>
      O que é?
    </>
  );

    const text01 = (
    <>
      Número de telefone para falar que algúem ou algo está te fazendo sentir medo.
    </>
  );

    const text10 = (
    <>
      Como funciona?
    </>
  );

    const text11 = (
    <>
      Você pode ligar de graça para pedir ajuda. Funciona 24 horas, todos os dias, e você não precisa dizer seu nome.
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