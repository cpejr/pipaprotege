import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";

const C2_Tela_15 = () => {
  const charada = {
    number: 2,
    question:
      "Seguro a cabeça sem reclamar, sou fino e comprido, gosto de me alongar. Quem sou eu?",
    answer: "Pescoço",
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

export default C2_Tela_15;
