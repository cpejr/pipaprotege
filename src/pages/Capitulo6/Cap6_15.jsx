import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_jogo.png";
import estrela4 from "../../assets/Capitulo6Img/estrelas/4.png";
import { BotoesEscolhaContainer } from "./StyledCap6";
import Button from "../../components/common/Button/Button";

export default function C6_Tela_15() {
  const navigate = useNavigate();

  const handleDraw = () => {
    navigate("/capitulo6/tela-17");
  };

  const handleWrite = () => {
    navigate("/capitulo6/tela-16");
  };

  const baloes = [
    {
      textParts: [
        { text: "Estrela de Confiança\n", color: "#FFC45BFB" },
        {
          text: "\nAlguns toques fazem a gente se sentir seguro e protegido. Desenhe ou escreva um toque que faça você se sentir protegido.",
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
        estrelaSrc={estrela4}
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
