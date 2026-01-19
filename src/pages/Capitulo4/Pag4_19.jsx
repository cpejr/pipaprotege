import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_19 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-20");
  };

  const quizData = {
    pageNumber: "12",
    contextText:
      "Durante o banho, alguém que cuida, mas não se preocupa com você, toca seu corpo de um jeito diferente.",
    correctColor: "yellow",
    pistaText: "Esse toque foi para te ajudar ou te deixou com uma sensação ruim?",
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

export default C4_Tela_19;
