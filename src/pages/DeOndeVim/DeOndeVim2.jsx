import React from "react";
import { CloseOutlined, ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Container, CloseButton, ArrowButton } from "./Styles";
import { useNavigate } from "react-router-dom";
export default function DeOndeVim2() {
  const navigate = useNavigate();
  const handleAdvance = () => {
    navigate("/de-onde-vim/3");
  };
  const handleBack = () => {
    navigate("/de-onde-vim");
  };
  return (
    <Container bg='2'>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>

      <ArrowButton onClick={handleBack}>
        <ArrowLeftOutlined />
      </ArrowButton>
      <ArrowButton onClick={handleAdvance} right>
        <ArrowRightOutlined />
      </ArrowButton>
    </Container>
  );
}
