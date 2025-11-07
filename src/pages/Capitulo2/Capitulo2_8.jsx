import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_8() {
  return (
    <Container bg='8'>
      <CornerButton to='/capitulo-2/9'>
        <span className='label'>AVANÇAR</span>
        <span className='icon'>
          <ArrowRightOutlined />
        </span>
      </CornerButton>
    </Container>
  );
}
