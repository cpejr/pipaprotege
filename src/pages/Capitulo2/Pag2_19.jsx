import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";

const C2_Tela_19 = () => {
  const charada = {
    number: 6,
    question: "No meio do corpo eu estou, depois de comer, sou quem mais cresceu. Quem sou eu?",
    answer: "Barriga",
    hint: "ELA COMEÇA COM A LETRA 'B'",
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

export default C2_Tela_19;
