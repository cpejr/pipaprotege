import React from "react";
import { CloseOutlined, ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Container, CloseButton, ArrowButton } from "./Styles";
import { useNavigate } from "react-router-dom";
export default function DeOndeVim2() {
  const navigate = useNavigate();
  return (
    <Container bg='2'>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>

      <ArrowButton onClick={navigate("/de-onde-vim")}>
        <ArrowLeftOutlined />
      </ArrowButton>
      <ArrowButton onClick={navigate("/de-onde-vim/3")} right>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
