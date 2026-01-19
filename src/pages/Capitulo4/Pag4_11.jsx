import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_11 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-12");
  };

  const quizData = {
    pageNumber: "4",
    contextText:
      "Você está dormindo e alguém que cuida, mas não se preocupa com você, pede para você tocar nela de um jeito diferente.",
    correctColor: "red",
    pistaText: "Esse toque para proteger você ou deu medo e vontade de correr?",
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

export default C4_Tela_11;
