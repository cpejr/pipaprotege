import { useNavigate } from "react-router-dom";
import { Container, CircleButton } from "./Styles";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <Container>
      <CircleButton onClick={() => navigate("/capitulo1")} style={{ top: "41%", left: "9.5%" }} />
      <CircleButton onClick={() => navigate("/capitulo2")} style={{ top: "66%", left: "15.5%" }} />
      <CircleButton onClick={() => navigate("/capitulo3")} style={{ top: "55%", left: "26%" }} />
      <CircleButton onClick={() => navigate("/capitulo4")} style={{ top: "33%", left: "33%" }} />
      <CircleButton onClick={() => navigate("/capitulo5")} style={{ top: "49%", left: "43%" }} />
      <CircleButton onClick={() => navigate("/capitulo6")} style={{ top: "60%", left: "58.5%" }} />
      <CircleButton onClick={() => navigate("/capitulo7")} style={{ top: "40%", left: "62%" }} />
      <CircleButton onClick={() => navigate("/capitulo8")} style={{ top: "46%", left: "76.5%" }} />
      <CircleButton onClick={() => navigate("/capitulo9")} style={{ top: "58%", left: "91%" }} />
    </Container>
  );
}
