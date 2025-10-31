import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_5() {
  return (
    <Container bg='5'>
      <ArrowButton to='/capitulo-2/6'>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
