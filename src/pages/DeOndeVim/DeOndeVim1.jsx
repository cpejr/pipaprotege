import React from "react";
import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Container, CloseButton, ArrowButton } from "./Styles";
import { useNavigate } from "react-router-dom";
export default function DeOndeVim1() {
  const navigate = useNavigate();
  const handleAdvance = () => {
    navigate("/de-onde-vim/2");
  };
  return (
    <Container bg='1'>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>
      <ArrowButton onClick={handleAdvance} right>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
