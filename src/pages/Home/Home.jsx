import { TelaInicial, StyleButton, OrganizeButton, StyleLink } from "./Styles";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <TelaInicial>
      <OrganizeButton>
        <StyleLink>
          <StyleButton bgColor='#FDB92E' onClick={() => navigate("/intro")}>
            JOGAR
          </StyleButton>
        </StyleLink>

        <StyleLink>
          <StyleButton
            bgColor='#A367F7'
            onClick={() => navigate("/cartilha")}
            borderColor='white'
            color='white'
          >
            CARTILHA
          </StyleButton>
        </StyleLink>

        <StyleLink>
          <StyleButton
            bgColor='#A367F7'
            borderColor='white'
            color='white '
            onClick={() => navigate("/denuncia")}
          >
            DENÚNCIA
          </StyleButton>
        </StyleLink>

        <StyleLink>
          <StyleButton
            bgColor='#A367F7'
            borderColor='white'
            color='white'
            onClick={() => navigate("/de-onde-vim")}
          >
            DE ONDE VIM?
          </StyleButton>
        </StyleLink>
      </OrganizeButton>
    </TelaInicial>
  );
}
