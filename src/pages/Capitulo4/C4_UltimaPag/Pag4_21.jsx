import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button/Button";

import { FinalContainer, BotaoContainer } from "./Pag4_21Styled";

const C4_Tela_21 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/fim");
  };

  return (
    <FinalContainer>
      <BotaoContainer>
        <Button onClick={handleAdvance} type='avancar'>
          AVANÇAR
        </Button>
      </BotaoContainer>
    </FinalContainer>
  );
};

export default C4_Tela_21;
