import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";

const C2_Tela_17 = () => {
  const charada = {
    number: 4,
    question: "Sou longo e flexível, posso abraçar e também levantar. Quem sou eu?",
    answer: "Braço",
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

export default C2_Tela_17;
