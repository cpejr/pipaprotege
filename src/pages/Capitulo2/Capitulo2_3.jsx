import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_3() {
  return (
    <Container bg='3'>
      <ArrowButton to='/capitulo-2/4'>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
