import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button/Button";
import { TelaIntroducao, TituloCapitulo, BotaoContainerIntro } from "./C4_Introducao.styles.js";

const C4_Introducao = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/capitulo4/tela-01");
  };

  return (
    <TelaIntroducao>
      <TituloCapitulo>CAPÍTULO 4</TituloCapitulo>

      <BotaoContainerIntro>
        <Button type='iniciar' onClick={handleStart}>
          INICIAR
        </Button>
      </BotaoContainerIntro>
    </TelaIntroducao>
  );
};

export default C4_Introducao;
