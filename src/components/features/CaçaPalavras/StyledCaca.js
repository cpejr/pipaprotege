import styled, { css } from "styled-components";

export const PuzzleContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  max-width: 700px;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const InstructionsTop = styled.div`
  text-align: center;
  margin-bottom: 20px;

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
  }
`;

export const PalavrasBusca = styled.p`
  span {
    color: #ff9900;
  }

  & + p {
    font-size: 14px;
    font-weight: 500;
    color: #555;
    margin-top: 5px;
  }
`;

export const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(15, minmax(15px, 30px));
  gap: 0;
`;

const foundStyle = css`
  background-color: #f7b24e;
  color: white !important;
  font-weight: bold;
`;

const selectedStyle = css`
  background-color: #a4e6ff;
`;

const cellBaseStyle = css`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
`;

export const GridCell = styled.div`
  ${cellBaseStyle}

  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;

  ${(props) => props.isSelecting && selectedStyle}
  ${(props) => props.isFound && foundStyle}
  
  color: #000;
`;

export const FooterControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LeftControls = styled.div`
  display: flex;
  align-items: center;

  .control-icon {
    font-size: 24px;
    cursor: pointer;
    color: #6ed1e2;
    margin-right: 10px;
  }

  .orange-square {
    width: 20px;
    height: 20px;
    background-color: #ff9900;
    border-radius: 4px;
  }
`;
