import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button/Button";
import { TelaIntroducao, TituloCapitulo, BotaoContainerIntro } from "./C7_Introducao_Styles.js";

const C7_Introducao = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/capitulo7/tela-01");
  };

  return (
    <TelaIntroducao>
      <TituloCapitulo>CAPÍTULO 7</TituloCapitulo>

      <BotaoContainerIntro>  
        <Button type='iniciar' onClick={handleStart}>
          INICIAR
        </Button>
      </BotaoContainerIntro>
    </TelaIntroducao>
  );
};

export default C7_Introducao;
