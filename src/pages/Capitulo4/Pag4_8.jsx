import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_08 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-09");
  };

  const quizData = {
    pageNumber: "1",
    contextText:
      "Antes de ir para a escola, o adulto que cuida e se preocupa com você te dá um abraço carinhoso de despedida.",
    correctColor: "green",
    pistaText: "Esse toque fez você se sentir seguro e protegido.",
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

export default C4_Tela_08;
