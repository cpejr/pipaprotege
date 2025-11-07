import { Link } from "react-router-dom";
import styled from "styled-components";
import fundoIntro from "../../assets/fundo-intro.png";

export default function Intro() {
  const nodes = [
    { n: 1, to: "/capitulo/1", x: 9, y: 38 },
    { n: 2, to: "/capitulo/2", x: 22, y: 62 },
    { n: 3, to: "/capitulo/3", x: 34, y: 44 },
    { n: 4, to: "/capitulo/4", x: 44, y: 34 },
    { n: 5, to: "/capitulo/5", x: 54, y: 47 },
    { n: 6, to: "/capitulo/6", x: 66, y: 54 },
    { n: 7, to: "/capitulo/7", x: 76, y: 47 },
    { n: 8, to: "/capitulo/8", x: 85, y: 45 },
    { n: 9, to: "/capitulo/9", x: 94, y: 55 },
  ];

  return (
    <Container>
      <Curve>
        <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
          <defs>
            <filter id='soft'>
              <feDropShadow dx='0' dy='0' stdDeviation='1.2' floodOpacity='0.25' />
            </filter>
          </defs>
          <path
            d='M 8,32 C 13,70 24,66 30,52 C 37,36 45,26 52,42 C 58,56 64,60 72,52 C 79,44 86,35 93,58'
            fill='none'
            stroke='#FFFFFF'
            strokeWidth='2.6'
            strokeLinecap='round'
            filter='url(#soft)'
            vectorEffect='non-scaling-stroke'
          />
        </svg>
      </Curve>

      {nodes.map(({ n, to, x, y }) => (
        <Dot key={n} to={to} style={{ left: `${x}%`, top: `${y}%` }}>
          <span>{n}</span>
        </Dot>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${fundoIntro});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const Curve = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Dot = styled(Link)`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: clamp(44px, 6vw, 80px);
  height: clamp(44px, 6vw, 80px);
  border-radius: 999px;
  background: #f4b23c;
  border: 2px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
  display: grid;
  place-items: center;
  text-decoration: none;
  span {
    font-weight: 800;
    font-size: clamp(18px, 2.2vw, 28px);
    color: #fff;
    line-height: 1;
  }
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.28);
  }
  &:active {
    transform: translate(-50%, -50%) scale(0.98);
  }
`;
