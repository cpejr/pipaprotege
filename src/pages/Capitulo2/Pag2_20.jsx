import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";

const C2_Tela_20 = () => {
  const charada = {
    number: 7,
    question: "Sou forte e grandona, fico na perna e ajudo a correr. Quem sou eu?",
    answer: "Canela",
    hint: "ELA COMEÇA COM A LETRA 'C'",
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

export default C2_Tela_20;
