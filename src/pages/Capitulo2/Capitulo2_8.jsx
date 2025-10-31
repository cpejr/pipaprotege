import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_8() {
  return (
    <Container bg='8'>
      <ArrowButton to='/capitulo-2/9'>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
