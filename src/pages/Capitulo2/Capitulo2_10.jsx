import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_10() {
  return (
    <Container bg='10'>
      <ArrowButton to='/capitulo-2/11'>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
