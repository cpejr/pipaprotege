import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";

const C2_Tela_14 = () => {
  const charada = {
    number: 1,
    question: "Fico na frente e sou onde você me vê, tenho olhos, nariz e boca, quem eu sou?",
    answer: "Rosto",
    hint: "ELA COMEÇA COM A LETRA 'R'",
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

export default C2_Tela_14;
