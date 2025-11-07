import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_3() {
  return (
    <Container bg='3'>
      <CornerButton to='/capitulo-2/4'>
        <span className='label'>AVANÇAR</span>
        <span className='icon'>
          <ArrowRightOutlined />
        </span>
      </CornerButton>
    </Container>
  );
}
