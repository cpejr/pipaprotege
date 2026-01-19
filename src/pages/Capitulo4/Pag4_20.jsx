import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_20 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-21");
  };

  const quizData = {
    pageNumber: "13",
    contextText:
      "Você está triste na escola e decide falar com sua professora. Ela te abraça bem forte e pergunta como pode ajudar.",
    correctColor: "green",
    pistaText: "Esse toque fez você se sentir cuidado ou deixou você preocupado?",
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

export default C4_Tela_20;
