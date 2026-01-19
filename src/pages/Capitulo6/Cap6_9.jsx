import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_jogo.png";
import estrela2 from "../../assets/Capitulo6Img/estrelas/2.png";
import { BotoesEscolhaContainer } from "./StyledCap6";
import Button from "../../components/common/Button/Button";

export default function C6_Tela_09() {
  const navigate = useNavigate();

  const handleDraw = () => {
    navigate("/capitulo6/tela-11");
  };

  const handleWrite = () => {
    navigate("/capitulo6/tela-10");
  };

  const baloes = [
    {
      textParts: [
        { text: "Estrela do Super Não\n", color: "#9E43FF" },
        {
          text: "\nQuando algo deixa você incomodado, você pode usar o poder de dizer não. Desenhe ou escreva sobre uma vez que você disse não para se proteger.",
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
        estrelaSrc={estrela2}
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
