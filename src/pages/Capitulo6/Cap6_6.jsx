import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_jogo.png";
import estrela1 from "../../assets/Capitulo6Img/estrelas/1.png";
import { BotoesEscolhaContainer } from "./StyledCap6";
import Button from "../../components/common/Button/Button";

export default function C6_Tela_06() {
  const navigate = useNavigate();

  const handleDraw = () => {
    navigate("/capitulo6/tela-08");
  };

  const handleWrite = () => {
    navigate("/capitulo6/tela-07");
  };

  const baloes = [
    {
      textParts: [
        { text: "Estrela de Direitos\n", color: "red" },
        {
          text: "\nVocê tem direitos que ajudam a manter sua\nsegurança e proteção!\n\nDesenhe ou escreva um de seus direitos.",
          color: "black",
        },
      ],
      variant: "variant9",
    },
  ];

  return (
    <>
      <ChapterScreen
        backgroundImage={fundo}
        baloes={baloes}
        showEstrela={true}
        estrelaSrc={estrela1}
        showButton={false}
      />

      <BotoesEscolhaContainer>
        <Button onClick={handleDraw} type='amarelo'>
          DESENHAR
        </Button>
        <Button onClick={handleWrite} type='amarelo'>
          ESCREVER
        </Button>
      </BotoesEscolhaContainer>
    </>
  );
}
