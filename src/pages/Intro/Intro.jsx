import { Container, CircleButton } from "./Styles";

export default function Intro() {
  return (
    <Container>
      <CircleButton to='/capitulo1' style={{ top: "41%", left: "9.5%" }} />
      <CircleButton to='/capitulo2' style={{ top: "66%", left: "15.5%" }} />
      <CircleButton to='/capitulo3' style={{ top: "55%", left: "26%" }} />
      <CircleButton to='/capitulo4' style={{ top: "33%", left: "33%" }} />
      <CircleButton to='/capitulo5' style={{ top: "49%", left: "43%" }} />
      <CircleButton to='/capitulo6' style={{ top: "60%", left: "58.5%" }} />
      <CircleButton to='/capitulo7' style={{ top: "40%", left: "62%" }} />
      <CircleButton to='/capitulo8' style={{ top: "46%", left: "76.5%" }} />
      <CircleButton to='/capitulo9' style={{ top: "58%", left: "91%" }} />
    </Container>
  );
}
