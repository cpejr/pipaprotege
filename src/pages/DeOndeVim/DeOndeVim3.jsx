import React from "react";
import { CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Container, CloseButton, ArrowButton } from "./Styles";

export default function DeOndeVim3() {
  return (
    <Container bg='3'>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>
      <ArrowButton to='/de-onde-vim2'>
        <ArrowLeftOutlined />
      </ArrowButton>
    </Container>
  );
}
