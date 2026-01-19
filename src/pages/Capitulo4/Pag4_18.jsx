import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_18 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-19");
  };

  const quizData = {
    pageNumber: "11",
    contextText:
      "No recreio, alguém passa a mão nas suas partes íntimas e fala para você não contar para ninguém, senão vai te bater.",
    correctColor: "red",
    pistaText: "Esse toque fez você se sentir seguro ou deu medo e te fez chorar?",
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

export default C4_Tela_18;
