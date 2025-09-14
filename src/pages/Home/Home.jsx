import { TelaInicial, StyleButton, OrganizeButton, StyleLink } from "./Styles";
import TextoModal from "../../components/common/Modal/TextoModal";

export default function Home() {
  const text1 = "Não é legal quando alguém mostra foto ou vídeos de pessoas sem roupa para você.";

  return (
    <TelaInicial>
      <OrganizeButton>
        <TextoModal content={<p>{text1}</p>} />
        <StyleLink to='/jogar'>
          <StyleButton bgColor='#FDB92E'>JOGAR</StyleButton>
        </StyleLink>

        <StyleLink to='/cartilha' marginTop='45px'>
          <StyleButton bgColor='#A367F7' borderColor='white' color='white'>
            CARTILHA
          </StyleButton>
        </StyleLink>

        <StyleLink to='/denuncia'>
          <StyleButton bgColor='#A367F7' borderColor='white' color='white'>
            DENÚNCIA
          </StyleButton>
        </StyleLink>

        <StyleLink to='/de-onde-vim'>
          <StyleButton bgColor='#A367F7' borderColor='white' color='white'>
            DE ONDE VIM?
          </StyleButton>
        </StyleLink>
      </OrganizeButton>
    </TelaInicial>
  );
}
