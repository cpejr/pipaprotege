import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button/Button";
import { TelaIntroducao, TituloCapitulo, BotaoContainerIntro } from "./C8_Introducao.styles.js";

const C8_Introducao = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/capitulo8/tela-01");
  };

  return (
    <TelaIntroducao>
      <TituloCapitulo>CAPÍTULO 8</TituloCapitulo>

      <BotaoContainerIntro>
        <Button type='iniciar' onClick={handleStart}>
          INICIAR
        </Button>
      </BotaoContainerIntro>
    </TelaIntroducao>
  );
};

export default C8_Introducao;
