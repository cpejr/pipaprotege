import{
    TelaFundo,
    ContainerButtonVoltar,
    ContainerButtonSair,
    BalaoImagemDir,
    TextoBalao,
    CachorroOverlay
    
} from "./Style"

import EmPe2 from "../../assets/Capitulo1Img/Cachorro/EmPe2.png";

import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom"; 

export default function ExitPage(){
    const navigate = useNavigate();

    const exit = () =>{
        navigate("/")
    };

    const back = () =>{
        navigate(-1)
    }
return(
    <TelaFundo>
        <ContainerButtonSair>
            <Button type='close' onClick={exit}>Sair</Button>
        </ContainerButtonSair>

        <BalaoImagemDir>
            <TextoBalao>Tudo bem, sua vontade é o mais importante. Se quiser, volte mais tarde!</TextoBalao>
        </BalaoImagemDir>

        <CachorroOverlay src={EmPe2}/>

        <ContainerButtonVoltar>
            <Button type='voltar' onClick={back}>Voltar</Button>
        </ContainerButtonVoltar>
            
        
        
    </TelaFundo>


);
}