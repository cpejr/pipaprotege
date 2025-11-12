import {
  TelaInicial,
  LeftDiv,
  RightDiv,
  Container,
  ShieldIcon,
  RightIcon,
  ButtonDiv,
  DivText,
  StyledImage,
  DivShield,
  DivButtons,
  Image,
} from "./StyledFalas";
import React, { useState } from "react";
import pipa from "../../assets/capitulo3/imagesPage/pipaTeste1.svg";
import Text1 from "../../assets/capitulo3/imagesPage/Escritos21.svg";
import Text2 from "../../assets/capitulo3/imagesPage/Escritos22.svg";
import Text3 from "../../assets/capitulo3/imagesPage/Escritos23.svg";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";

const ACTIVE_COLOR = "green";
const DEFAULT_COLOR = "#8c52ff";

export default function C3_Tela_05() {
  const [isRow1Clicked, setIsRow1Clicked] = useState(false);
  const [isRow2Clicked, setIsRow2Clicked] = useState(false);
  const [isRow3Clicked, setIsRow3Clicked] = useState(false);
  const navigate = useNavigate();
  const handleAdvance = () => {
    navigate("/capitulo3/tela-07");
  };
  const handleIconClick = (rowSetter) => {
    rowSetter(true);
  };

  return (
    <TelaInicial>
      <Container>
        <LeftDiv>
          <DivText>
            <div>
              <StyledImage src={Text1} />
            </div>

            <DivButtons>
              <DivShield>
                <RightIcon onClick={() => handleIconClick(setIsRow1Clicked)}></RightIcon>
                TUDO BEM
              </DivShield>
              <DivShield>
                <ShieldIcon
                  onClick={() => handleIconClick(setIsRow1Clicked)}
                  clickedcolor={isRow1Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
                ></ShieldIcon>
                ESCUDO DE PROTEÇÃO
              </DivShield>
            </DivButtons>
          </DivText>
          <DivText>
            <div>
              <StyledImage src={Text2} />
            </div>
            <DivButtons>
              <DivShield>
                <RightIcon onClick={() => handleIconClick(setIsRow2Clicked)}></RightIcon>
                TUDO BEM
              </DivShield>
              <DivShield>
                <ShieldIcon
                  onClick={() => handleIconClick(setIsRow2Clicked)}
                  clickedcolor={isRow2Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
                ></ShieldIcon>
                ESCUDO DE PROTEÇÃO
              </DivShield>
            </DivButtons>
          </DivText>
          <DivText>
            <div>
              <StyledImage src={Text3} />
            </div>

            <DivButtons>
              <DivShield>
                <RightIcon onClick={() => handleIconClick(setIsRow3Clicked)}></RightIcon>
                TUDO BEM
              </DivShield>
              <DivShield>
                <ShieldIcon
                  onClick={() => handleIconClick(setIsRow3Clicked)}
                  clickedcolor={isRow3Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
                >
                  {" "}
                </ShieldIcon>
                ESCUDO DE PROTEÇÃO
              </DivShield>
            </DivButtons>
          </DivText>
        </LeftDiv>
        <RightDiv>
          <Image src={pipa} />
        </RightDiv>
      </Container>
      <ButtonDiv>
        <Button type='avancar' onClick={handleAdvance}>
          AVANÇAR
        </Button>
      </ButtonDiv>
    </TelaInicial>
  );
}
