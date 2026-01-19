import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_17 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-18");
  };

  const quizData = {
    pageNumber: "10",
    contextText:
      "Você está assistindo televisão e alguém da sua família abraça você de um jeito diferente.",
    correctColor: "yellow",
    pistaText: "Esse toque foi de proteção ou fez você querer sair de perto?",
  };

  return (
    <TelaQuiz
      pageNumber={quizData.pageNumber}
      contextText={quizData.contextText}
      correctColor={quizData.correctColor}
      pistaText={quizData.pistaText}
      onAdvance={handleAdvance}
    />
  );
};

export default C4_Tela_17;
