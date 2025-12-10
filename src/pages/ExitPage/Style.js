import styled from "styled-components";
import Balao_De_Fala from "../../assets/Capitulo1Img/Balao_De_Fala.png";

export const TelaFundo = styled.div`
  background-color: #6ed1e2;

  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const BalaoBase = styled.div`
  position: absolute;
  width: 450px;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ContainerButtonVoltar = styled.div`
  position: absolute;
  bottom: 80px;
  right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerButtonSair= styled.div`
  position: absolute;
  top : 40px;
  left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BalaoImagemDir = styled(BalaoBase)`
  top: 25%;
  right: 15%;
  background-image: url(${Balao_De_Fala});
`;
export const TextoBalao = styled.p`
  position: absolute;
  top: 41%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  margin: 0;

  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
  line-height: 1.4;

  & strong {
    font-weight: 900;
  }
`;

export const CachorroOverlay = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 55%;
  object-fit: contain;
`;

