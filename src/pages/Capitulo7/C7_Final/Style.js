import styled from "styled-components";

export const PlanoFundo = styled.div`
  background-color: #6CAF5C;

  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

`;

export const CachorroOverlay = styled.img`
  position: absolute;
  bottom: 0;
  left: 40%;
  transform: translateX(-50%);
  height: 65%;
  object-fit: contain;
  z-index: 10;
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
  z-index: 20;
`;