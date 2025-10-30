import { TelaInicial, StyleLink, StyleButton, ShieldIcon, RightIcon } from "./StyledFalas";
import fundo from "../../../assets/capitulo3/cap37.svg";
import Button from "../../../components/common/Button/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";

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
    <TelaInicial bgImage={fundo}>
      <ShieldIcon
        position='absolute'
        bottom='545px'
        right='894px'
        zIndex='1000'
        onClick={() => handleIconClick(setIsRow1Clicked)}
      />
      <RightIcon
        position='absolute'
        bottom='545px'
        right='1289px'
        zIndex='1000'
        onClick={() => handleIconClick(setIsRow1Clicked)}
        clickedcolor={isRow1Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
      />
      <ShieldIcon
        position='absolute'
        bottom='290px'
        right='894px'
        zIndex='1000'
        onClick={() => handleIconClick(setIsRow2Clicked)}
        clickedcolor={isRow2Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
      />
      <RightIcon
        position='absolute'
        bottom='290px'
        right='1288px'
        zIndex='1000'
        onClick={() => handleIconClick(setIsRow2Clicked)}
      />
      <ShieldIcon
        position='absolute'
        bottom='35px'
        right='894px'
        zIndex='1000'
        onClick={() => handleIconClick(setIsRow3Clicked)}
        clickedcolor={isRow3Clicked ? ACTIVE_COLOR : DEFAULT_COLOR}
      />
      <RightIcon
        position='absolute'
        bottom='35px'
        right='1286px'
        zIndex='1000'
        onClick={() => handleIconClick(setIsRow3Clicked)}
      />

      <Button type='avancar' margin='740px 0 0 1080px' as={Link} to='/Cap3_8'>
        AVANÇAR
      </Button>
    </TelaInicial>
  );
}
