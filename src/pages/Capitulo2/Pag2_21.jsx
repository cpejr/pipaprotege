import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";

const C2_Tela_21 = () => {
  const charada = {
    number: 8,
    question:
      "Fico no meio da perna e gosto de dobrar, sem mim fica difícil se agachar. Quem sou eu?",
    answer: "Joelho",
    hint: "ELA COMEÇA COM A LETRA 'J'",
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

export default C2_Tela_21;
