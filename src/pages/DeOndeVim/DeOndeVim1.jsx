import React from "react";
import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Container, CloseButton, ArrowButton } from "./Styles";

export default function DeOndeVim1() {
  return (
    <Container bg='1'>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>
      <ArrowButton to='/de-onde-vim2' right>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
