import { TelaInicial, StyleButton, OrganizeButton, StyleLink } from "./Styles";

export default function Home() {
  return (
    <TelaInicial>
      <OrganizeButton>
        <StyleLink to='/jogar'>
          <StyleButton bgColor='#FDB92E'>JOGAR</StyleButton>
        </StyleLink>

        <StyleLink to='/cartilha'>
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
