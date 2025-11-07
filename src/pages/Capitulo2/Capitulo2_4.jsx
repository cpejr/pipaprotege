import React from "react";
import { Container } from "./Styles";
import { Link } from "react-router-dom";

export default function Capitulo2_4() {
  return (
    <Container bg='4'>
      <Link
        to='/capitulo-2/5'
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
        }}
      />
    </Container>
  );
}
