import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_10 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-11");
  };

  const quizData = {
    pageNumber: "3",
    contextText: "No recreio, alguém da escola toca no seu ombro e pede para ver você sem roupa.",
    correctColor: "red",
    pistaText: "Esse toque pareceu de um amigo ou fez você querer sair de perto?",
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

export default C4_Tela_10;
