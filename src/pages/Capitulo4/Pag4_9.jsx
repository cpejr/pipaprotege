import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_09 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-10");
  };

  const quizData = {
    pageNumber: "2",
    contextText: "Na escola, durante uma brincadeira, um amigo empurra você bem forte.",
    correctColor: "yellow",
    pistaText: "Esse toque foi divertido ou deixou você triste?",
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

export default C4_Tela_09;
