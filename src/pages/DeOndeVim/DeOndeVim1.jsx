import React from "react";
import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Container, CloseButton, ArrowButton } from "./Styles";
import { useNavigate } from "react-router-dom";
export default function DeOndeVim1() {
  const navigate = useNavigate();
  return (
    <Container bg='1'>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>
      <ArrowButton onClick={navigate("/de-onde-vim/2")} right>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
