import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_4() {
  return (
    <Container bg='4'>
      <ArrowButton to='/capitulo-2/5'>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
