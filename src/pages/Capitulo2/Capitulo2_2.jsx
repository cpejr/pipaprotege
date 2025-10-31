import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

export default function Capitulo2_2() {
  return (
    <Container bg='2'>
      <ArrowButton to='/capitulo-2/3'>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
