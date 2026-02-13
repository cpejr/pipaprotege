import { Link } from "react-router-dom";
import styled from "styled-components";
import fundoIntro from "../../assets/fundo-intro.png";

export default function Intro() {
  return (
    <Container>
      <RoundButton to='/capitulo/1' style={{ top: "35%", left: "10%" }}>
        1
      </RoundButton>
      <RoundButton to='/capitulo/2' style={{ top: "55%", left: "15%" }}>
        2
      </RoundButton>
      <RoundButton to='/capitulo/3' style={{ top: "40%", left: "25%" }}>
        3
      </RoundButton>
      <RoundButton to='/capitulo/4' style={{ top: "20%", left: "35%" }}>
        4
      </RoundButton>
      <RoundButton to='/capitulo/5' style={{ top: "45%", left: "45%" }}>
        5
      </RoundButton>
      <RoundButton to='/capitulo/6' style={{ top: "65%", left: "55%" }}>
        6
      </RoundButton>
      <RoundButton to='/capitulo/7' style={{ top: "30%", left: "65%" }}>
        7
      </RoundButton>
      <RoundButton to='/capitulo/8' style={{ top: "50%", left: "75%" }}>
        8
      </RoundButton>
      <RoundButton to='/capitulo/9' style={{ top: "70%", left: "85%" }}>
        9
      </RoundButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  background-image: url(${fundoIntro});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const RoundButton = styled(Link)`
  position: absolute;
  transform: translate(-50%, -50%);

  width: 60px;
  height: 60px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5bd58(106, 52, 187, 0.9);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;

  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background-color: rgba(106, 52, 187, 1);
  }
`;
