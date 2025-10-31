import React from "react";
import { Container, OkButton } from "./Styles";

export default function Capitulo2_21() {
  return (
    <Container bg='21'>
      {/* Depois da última pergunta, pode voltar pra Home ou outro destino */}
      <OkButton to='/'>OK</OkButton>
    </Container>
  );
}
