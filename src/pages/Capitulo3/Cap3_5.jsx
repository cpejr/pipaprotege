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
} from "./StyledFalas";
import React, { useState } from "react";
import pipa from "../../assets/capitulo3/imagesPage/pipaTeste1.svg";
import Text1 from "../../assets/capitulo3/imagesPage/Escritos11.svg";
import Text2 from "../../assets/capitulo3/imagesPage/Escritos12.svg";
import Text3 from "../../assets/capitulo3/imagesPage/Escritos13.svg";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";

const ACTIVE_COLOR = "green";
const DEFAULT_COLOR = "#8c52ff";

export default function Capitulo3() {
  const [isRow1Clicked, setIsRow1Clicked] = useState(false);
  const [isRow2Clicked, setIsRow2Clicked] = useState(false);
  const [isRow3Clicked, setIsRow3Clicked] = useState(false);

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
                <ShieldIcon onClick={() => handleIconClick(setIsRow1Clicked)}></ShieldIcon>
                Tudo bem
              </DivShield>
              <DivShield>
                <RightIcon
                  onClick={() => handleIconClick(setIsRow1Clicked)}
                  clickedcolor={isRow1Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
                ></RightIcon>
                Escudo de proteção
              </DivShield>
            </DivButtons>
          </DivText>
          <DivText>
            <div>
              <StyledImage src={Text2} />
            </div>
            <DivButtons>
              <DivShield>
                <ShieldIcon onClick={() => handleIconClick(setIsRow2Clicked)}></ShieldIcon>
                Tudo bem
              </DivShield>
              <DivShield>
                <RightIcon
                  onClick={() => handleIconClick(setIsRow2Clicked)}
                  clickedcolor={isRow2Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
                ></RightIcon>
                Escudo de proteção
              </DivShield>
            </DivButtons>
          </DivText>
          <DivText>
            <div>
              <StyledImage src={Text3} />
            </div>

            <DivButtons>
              <DivShield>
                <ShieldIcon
                  onClick={() => handleIconClick(setIsRow3Clicked)}
                  clickedcolor={isRow3Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
                >
                  {" "}
                </ShieldIcon>
                Tudo bem
              </DivShield>
              <DivShield>
                <RightIcon onClick={() => handleIconClick(setIsRow3Clicked)}></RightIcon>
                Escudo de proteção
              </DivShield>
            </DivButtons>
          </DivText>
        </LeftDiv>
        <RightDiv>
          <img src={pipa} />
        </RightDiv>
      </Container>
      <ButtonDiv>
        <Button type='avancar'>AVANÇAR</Button>
      </ButtonDiv>
    </TelaInicial>
  );
}
