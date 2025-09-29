import React from "react";
import { CloseOutlined, ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Container, CloseButton, ArrowButton } from "./Styles";

export default function DeOndeVim2() {
  return (
    <Container bg='2'>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>
      <ArrowButton to='/de-onde-vim'>
        <ArrowLeftOutlined />
      </ArrowButton>
      <ArrowButton to='/de-onde-vim3' right>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
