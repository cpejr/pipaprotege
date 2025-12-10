import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_13 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-14");
  };

  const quizData = {
    pageNumber: "6",
    contextText: "Na escola, um colega dá um tapa nas suas costas para chamar sua atenção.",
    correctColor: "yellow",
    pistaText: "Esse toque foi uma brincadeira ou deixou você confuso?",
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

export default C4_Tela_13;
