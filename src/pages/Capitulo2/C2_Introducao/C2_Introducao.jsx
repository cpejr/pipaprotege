import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button/Button";
import { TelaIntroducao, TituloCapitulo, BotaoContainerIntro } from "./C2_Introducao.styles.js";

const C2_Introducao = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/capitulo2/tela-01");
  };

  return (
    <TelaIntroducao>
      <TituloCapitulo>CAPÍTULO 2</TituloCapitulo>

      <BotaoContainerIntro>
        <Button type='iniciar' onClick={handleStart}>
          INICIAR
        </Button>
      </BotaoContainerIntro>
    </TelaIntroducao>
  );
};

export default C2_Introducao;
