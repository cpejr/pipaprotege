import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_1() {
  return (
    <Container bg='1'>
      <ArrowButton to='/capitulo-2/2'>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
