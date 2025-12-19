import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_16 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-17");
  };

  const quizData = {
    pageNumber: "9",
    contextText:
      "Durante a aula, sua professora toca seu cabelo e diz que você fez um ótimo trabalho na atividade de matemática.",
    correctColor: "green",
    pistaText: "Esse toque fez você se sentir bem ou deixou você desconfortável?",
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

export default C4_Tela_16;
