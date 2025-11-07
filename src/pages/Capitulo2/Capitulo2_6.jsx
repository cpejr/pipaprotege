import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_6() {
  return (
    <Container bg='6'>
      <CornerButton to='/capitulo-2/7'>
        <span className='label'>AVANÇAR</span>
        <span className='icon'>
          <ArrowRightOutlined />
        </span>
      </CornerButton>
    </Container>
  );
}
