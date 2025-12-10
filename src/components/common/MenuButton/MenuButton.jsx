import { HamburgerButton} from "./Style"
import { useLocation, useNavigate } from "react-router-dom"; 

export default function Header(){
    const navigate = useNavigate();
    const local = useLocation();
    const atualLocal= local.pathname;

    const nav = () =>{
        navigate("/tela-saida")
    };

    return(
        
            (atualLocal !=="/" && atualLocal !=="/intro" && atualLocal !=="/tela-saida") && (<HamburgerButton onClick={nav}>☰</HamburgerButton> )
            
        
            
    );
}
