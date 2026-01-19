import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";

const C2_Tela_22 = () => {
  const charada = {
    number: 9,
    question: "Fico no chão e te ajudo a andar, se quer correr, precisa me usar! Quem sou eu?",
    answer: "Pé",
    hint: "ELA COMEÇA COM A LETRA 'P'",
    nextPath: "/capitulo2/tela-13",
  };

  return (
    <BackgroundBege>
      <RiddleQuizModal
        riddleNumber={charada.number}
        questionText={charada.question}
        correctAnswer={charada.answer}
        answerHint={charada.hint}
        nextPath={charada.nextPath}
        defaultOpen={true}
      />
    </BackgroundBege>
  );
};

export default C2_Tela_22;
