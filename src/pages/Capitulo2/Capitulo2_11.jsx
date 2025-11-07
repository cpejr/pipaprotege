import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_11() {
  return (
    <Container bg='11'>
      <ArrowButton to='/capitulo-2/12'>
        <span className='label'>AVANÇAR</span>
        <span className='icon'>
          <ArrowRightOutlined />
        </span>
      </ArrowButton>
    </Container>
  );
}
