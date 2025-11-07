import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_2() {
  return (
    <Container bg='2'>
      <CornerButton to='/capitulo-2/3'>
        <span className='label'>AVANÇAR</span>
        <span className='icon'>
          <ArrowRightOutlined />
        </span>
      </CornerButton>
    </Container>
  );
}
