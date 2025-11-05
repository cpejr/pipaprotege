import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button.jsx";
import bg15 from "../../assets/capítulo 2.15.png";

const Screen = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #d0c2a9;
  background-image: url(${bg15});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const BtnWrap = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
`;

export default function Capitulo2_15() {
  const navigate = useNavigate();
  return (
    <Screen>
      <BtnWrap>
        <Button type='avancar' onClick={() => navigate("/capitulo2/16")}>
          AVANÇAR
        </Button>
      </BtnWrap>
    </Screen>
  );
}
