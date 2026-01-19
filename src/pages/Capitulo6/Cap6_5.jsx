import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_jogo.png";

export default function C6_Tela_05() {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo6/tela-06");
  };

  return (
    <ChapterScreen
      onAdvance={handleAdvance}
      backgroundImage={fundo}
      showButton={true}
      showPipaNums={true}
    />
  );
}
