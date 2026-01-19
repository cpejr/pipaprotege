import styled from "styled-components";
import QuadroRoxo from "../../common/QuadroRoxo/QuadroRoxo";

import PataRoxa from "../../../assets/Capitulo4Img/PataRoxa.png";
import Semaforo from "../../../assets/Capitulo4Img/Semaforo.png";
import SinalLaranja from "../../../assets/Capitulo4Img/SinalLaranja.png";

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 10px 0;
  width: 100%;
`;

const StyledImage = styled.img`
  object-fit: contain;
  flex-shrink: 0;

  &.semaforo {
    width: 150px;
    height: auto;
    margin-top: -10px;
  }

  &.pata {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }

  &.placa {
    width: 150px;
    height: auto;
    margin: 0 auto 10px auto;
    display: block;
  }

  @media (max-width: 768px) {
    &.semaforo {
      width: 80px;
    }
    &.pata {
      width: 20px;
      height: 20px;
    }
    &.placa {
      width: 100px;
    }
  }
`;

const InstructionBlock = styled.div`
  line-height: 1.4;
  font-size: 20px;
  font-weight: bold;

  & p {
    margin: 5px 0 15px 0;
  }
`;

const LightHeader = styled.h4`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: ${(props) => props.$color || "black"};
  text-decoration: underline;
`;

const PataInstructionText = styled.p`
  margin: 15px 0;
  display: flex;
  align-items: flex-start;
  font-weight: bold;
  font-size: 22px;
  line-height: 1.3;
  min-height: 100px;

  & strong {
    font-weight: bold;
    color: #000;
  }
`;

const ContentQuadroRoxo = styled.div`
  text-align: center;
  padding-top: 10px;
  font-size: 22px;
  min-height: 100px;
  font-weight: bold;
  line-height: 1.5;
`;

const PlacaContentText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  margin: 10px 0;

  & strong {
    color: #000;
    font-weight: 900;
  }
`;

const QuadroConteudoPista = ({ variant, ...rest }) => {
  let quadroProps = {
    style: {
      width: "100%",
      padding: "60px",
      textAlign: "center",
      minHeight: "380px",
    },
  };

  let innerContent;

  if (variant === "pata") {
    innerContent = (
      <>
        <PataInstructionText>
          <StyledImage className='pata' src={PataRoxa} />{" "}
          <span>
            {" "}
            Se for um <strong style={{ fontWeight: 900 }}> toque de confiança</strong>, siga em
            frente
          </span>
        </PataInstructionText>
        <PataInstructionText>
          <StyledImage className='pata' src={PataRoxa} />
          <span>
            {" "}
            Se for um <strong style={{ fontWeight: 900 }}> toque de desconfiança</strong>, desvie.
          </span>
        </PataInstructionText>
        <ContentQuadroRoxo>
          Use o semáforo como uma <strong style={{ fontWeight: 900 }}> Pista de Proteção</strong>{" "}
          para se manter seguro!
        </ContentQuadroRoxo>
      </>
    );
    quadroProps.style.minHeight = "250px";
  } else if (variant === "semaforo") {
    innerContent = (
      <ContentWrapper>
        <StyledImage className='semaforo' src={Semaforo} />
        <InstructionBlock>
          <LightHeader $color='red'>Luz Vermelha</LightHeader>
          <p>
            Toque que faz você se sentir estranho ou com medo. Diga{" "}
            <strong style={{ fontWeight: 900 }}>"não"</strong> e peça ajuda para um adulto em quem
            você confia.
          </p>

          <LightHeader $color='#f5bd58'>Luz Amarela</LightHeader>
          <p>
            Toque que deixa você confuso ou incomodado. Diga "não" e peça ajuda para um adulto em
            quem você confia.
          </p>

          <LightHeader $color='green'>Luz Verde</LightHeader>
          <p>Toque que faz você sentir seguro e protegido.</p>
        </InstructionBlock>
      </ContentWrapper>
    );
  } else if (variant === "placa") {
    quadroProps.style.textAlign = "center";
    quadroProps.style.padding = "40px";
    quadroProps.style.minHeight = "200px";

    innerContent = (
      <>
        <StyledImage className='placa' src={SinalLaranja} />
        <PlacaContentText>Fique sempre atento às Pistas de Proteção!</PlacaContentText>
        <PlacaContentText>Vamos começar?</PlacaContentText>
      </>
    );
  } else {
    innerContent = <p>Variante de Pista de Proteção não reconhecida.</p>;
  }

  return (
    <QuadroRoxo {...quadroProps} {...rest}>
      {innerContent}
    </QuadroRoxo>
  );
};

export default QuadroConteudoPista;
