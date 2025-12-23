import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_jogo.png";
import estrela5 from "../../assets/Capitulo6Img/estrelas/5.png";
import { BotoesEscolhaContainer } from "./StyledCap6";
import Button from "../../components/common/Button/Button";

export default function C6_Tela_12() {
  const navigate = useNavigate();

  const handleDraw = () => {
    navigate("/capitulo6/tela-19");
  };

  const baloes = [
    {
      textParts: [
        { text: "Estrela do Super Não\n", color: "#338AF4" },
        {
          text: "\nSeu corpo e suas íntimas são muito especiais. Desenhe seu corpo e faça um escudo para manter você sempre em segurança e proteção.",
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
        estrelaSrc={estrela5}
        showButton={false}
      />

      <BotoesEscolhaContainer>
        <Button onClick={handleDraw} type='amarelo'>
          DESENHAR
        </Button>
      </BotoesEscolhaContainer>
    </>
  );
}
