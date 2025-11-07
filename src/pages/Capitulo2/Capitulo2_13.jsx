import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_13() {
  return (
    <Container bg='13'>
      <ArrowButton to='/capitulo/1'>
        <span className='label'>AVANÇAR</span>
        <span className='icon'>
          <ArrowRightOutlined />
        </span>
      </ArrowButton>
    </Container>
  );
}
