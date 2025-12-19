import { useNavigate } from "react-router-dom";
import TelaQuiz from "../../components/features/PadraoCap4-2/TelaQuiz.jsx";

const C4_Tela_12 = () => {
  const navigate = useNavigate();

  const handleAdvance = () => {
    navigate("/capitulo4/tela-13");
  };

  const quizData = {
    pageNumber: "5",
    contextText:
      "Na consulta, o médico pede para tocar e examinar você. O adulto que cuida e se preocupa com você está junto e deixa o médico fazer isso.",
    correctColor: "green",
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

export default C4_Tela_12;
