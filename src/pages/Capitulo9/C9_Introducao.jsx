import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button/Button";
import {
  TelaIntroducao,
  TituloCapitulo,
  BotaoContainerIntro,
} from "../Capitulo1/C1_Introducao/C1_Introducao.styles.js";

const C9_Introducao = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/capitulo9/tela-01");
  };

  return (
    <TelaIntroducao>
      <TituloCapitulo>CAPÍTULO 9</TituloCapitulo>

      <BotaoContainerIntro>
        <Button type='iniciar' onClick={handleStart}>
          INICIAR
        </Button>
      </BotaoContainerIntro>
    </TelaIntroducao>
  );
};

export default C9_Introducao;
