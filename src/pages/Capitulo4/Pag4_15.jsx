import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_15 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-16");
  };

  const quizData = {
    pageNumber: "8",
    contextText:
      "Numa festa de família, alguém te abraça e não quer soltar, mesmo quando você pede para parar.",
    correctColor: "red",
    pistaText: "Esse toque foi de alegria ou deixou você com medo?",
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

export default C4_Tela_15;
