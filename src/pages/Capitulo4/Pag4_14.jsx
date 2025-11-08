import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_14 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-15");
  };

  const quizData = {
    pageNumber: "7",
    contextText:
      "Você está brincando em casa e alguém da sua família tenta beijar você de uma forma diferente.",
    correctColor: "yellow",
    pistaText: "Esse toque de cuidado ou deixou você desconfiado?",
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

export default C4_Tela_14;
