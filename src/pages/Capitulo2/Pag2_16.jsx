import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";
import { RiddleContentWrapper, NumberTag, QuestionText } from "./Styles";
const C2_Tela_16 = () => {
  const charada = {
    number: 3,
    question: "Sou forte e arredondado, entre o braço e o pescoço estou localizado. Quem sou eu?",
    answer: "Ombro",
    hint: "ELA COMEÇA COM A LETRA 'O'",
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
      <RiddleContentWrapper>
        <NumberTag left='10%'>
          <span>{charada.number}</span>
        </NumberTag>

        <QuestionText>{charada.question}</QuestionText>
      </RiddleContentWrapper>
    </BackgroundBege>
  );
};

export default C2_Tela_16;
