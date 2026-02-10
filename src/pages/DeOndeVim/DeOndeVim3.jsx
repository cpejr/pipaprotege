import React from "react";
import { CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Container, CloseButton, ArrowButton } from "./Styles";
import { useNavigate } from "react-router-dom";
export default function DeOndeVim3() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/de-onde-vim/2");
  };
  return (
    <Container bg='3'>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>
      <ArrowButton onClick={handleBack}>
        <ArrowLeftOutlined />
      </ArrowButton>
    </Container>
  );
}
