import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../components/features/PadraoCap1/ChapterScreen";

const C1_Tela_03 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo1/tela-04");
  };

  const contentText =
    "Prazer em te conhecer, [nome]! Minha missão é te ajudar a descobrir o mundo em segurança. Vamos juntos nessa?";

  const handleOtherButtonClick = () => {
    console.log("Usuário clicou em 'Agora não'. Redirecionando para a tela 04.2.");
    navigate("/capitulo1/tela-04.2");
  };

  return (
    <ChapterScreen
      text={contentText}
      onAdvance={handleAdvance}
      characterVariant='variant1'
      showOtherButton={true}
      onOtherButtonClick={handleOtherButtonClick}
    />
  );
};

export default C1_Tela_03;
