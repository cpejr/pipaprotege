import { Outlet } from "react-router-dom";
import  MenuButton  from "../components/common/MenuButton/MenuButton.jsx";
import { Container } from "./Style.js";
export default function AppLayout(){
    return(
        <Container>
            <MenuButton/>
            <Outlet/>
        </Container>


    )
}