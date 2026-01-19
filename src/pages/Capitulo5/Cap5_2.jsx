import ChapterScreen from "../../components/features/PadraoCap5/ChapterScreen";

import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo5Img/fundo_intro.png";

export default function C5_Tela_02() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo5/tela-03");
  };

  const baloes = [
    {
      text: "Mas, atenção.\nDurante a missão legal, se\nperceber que alguma dessas\nsituações já aconteceu ou está\nacontecendo com você,\nnão guarde segredo. Peça ajuda a\num adulto em quem você\nconfia.",
      variant: "variant4",
    },
  ];

  return (
    <ChapterScreen
      onAdvance={handleAdvance}
      characterVariant='variant1'
      backgroundImage={fundo}
      showButton={true}
      baloes={baloes}
    />
  );
}
