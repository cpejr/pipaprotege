import Button from "../../../components/common/Button/Button";
import Pipa from "../../../assets/Capitulo7Img/PipaFinal.png";
import { useNavigate } from "react-router-dom";

import{
    PlanoFundo,
    CachorroOverlay,
    BotaoContainer,
} from "./Style"

export default function C7_Final(){
    const navigate = useNavigate();
    
      const handleAdvance = () => {
        navigate("/intro");
      };
    
    return(
        <PlanoFundo>
            <CachorroOverlay src={Pipa} />
            <BotaoContainer>
              <Button onClick={handleAdvance} type='avancar'>
                AVANÇAR
              </Button>
            </BotaoContainer>

        </PlanoFundo>

    );

};