import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button/Button";
import { TelaIntroducao, TituloCapitulo, BotaoContainerIntro } from "./C1_Introducao.styles.js";

const C1_Introducao = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/capitulo1/tela-01");
  };

  return (
    <TelaIntroducao>
      <TituloCapitulo>CAPÍTULO 1</TituloCapitulo>

      <BotaoContainerIntro>
        <Button type='iniciar' onClick={handleStart}>
          INICIAR
        </Button>
      </BotaoContainerIntro>
    </TelaIntroducao>
  );
};

export default C1_Introducao;
