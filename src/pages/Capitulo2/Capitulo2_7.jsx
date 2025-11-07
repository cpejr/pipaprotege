import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_7() {
  return (
    <Container bg='7'>
      <CornerButton to='/capitulo-2/8'>
        <span className='label'>AVANÇAR</span>
        <span className='icon'>
          <ArrowRightOutlined />
        </span>
      </CornerButton>
    </Container>
  );
}
