import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_jogo.png";
import QuadroDesenho from "../../components/common/Desenho/QuadroDesenho";
import styled from "styled-components";

export default function C6_Tela_17() {
  const navigate = useNavigate();

  const handleSaveDrawing = (dataUrl) => {
    navigate("/capitulo6/tela-18");
  };

  const DesenhoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <ChapterScreen backgroundImage={fundo} />
      <DesenhoWrapper>
        <QuadroDesenho onSave={handleSaveDrawing} />
      </DesenhoWrapper>
    </>
  );
}
