import styled from "styled-components";
import { Link } from "react-router-dom";

import bg0 from "../../assets/capitulo 2.png";
import bg1 from "../../assets/capítulo 2.1.png";
import bg2 from "../../assets/capítulo 2.2.png";
import bg3 from "../../assets/capítulo 2.3.png";
import bg4 from "../../assets/capítulo 2.4.png";
import bg5 from "../../assets/capítulo 2.5.png";
import bg6 from "../../assets/capítulo 2.6.png";
import bg7 from "../../assets/capítulo 2.7.png";
import bg8 from "../../assets/capítulo 2.8.png";
import bg9 from "../../assets/capítulo 2.9.png";
import bg10 from "../../assets/capítulo 2.10.png";
import bg11 from "../../assets/capítulo 2.11.png";
import bg12 from "../../assets/capítulo 2.12.png";
import bg13 from "../../assets/capítulo 2.13.png";

const BG_MAP = {
  0: bg0,
  1: bg1,
  2: bg2,
  3: bg3,
  4: bg4,
  5: bg5,
  6: bg6,
  7: bg7,
  8: bg8,
  9: bg9,
  10: bg10,
  11: bg11,
  12: bg12,
  13: bg13,
};

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #d0c2a9 url(${({ bg }) => (BG_MAP.hasOwnProperty(bg) ? BG_MAP[bg] : bg0)}) center /
    cover no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 48px;
  overflow: hidden;
`;

export const PrimaryButton = styled(Link)`
  text-decoration: none;
  width: 340px;
  height: 85px;
  background: #8c52ff;
  color: #ffffff;
  border: 4px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 26px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 70px;
    font-size: 20px;
  }
`;

export const ArrowButton = styled(Link)`
  position: fixed;
  right: min(24px, 3vw);
  bottom: min(24px, 3vh);
  display: inline-flex;
  align-items: stretch;
  height: 84px;
  z-index: 20;
  text-decoration: none;
  font-family: Arial;
  font-weight: bold;
  .label {
    background: #f5bd58;
    color: #000;
    padding: 0 28px;
    display: flex;
    align-items: center;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    font-size: 28px;
  }
  .icon {
    background: #8c52ff;
    color: #fff;
    width: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    font-size: 40px;
  }
  @media (max-width: 768px) {
    height: 64px;
    .label {
      font-size: 18px;
      padding: 0 18px;
    }
    .icon {
      width: 70px;
      font-size: 28px;
    }
  }
`;
