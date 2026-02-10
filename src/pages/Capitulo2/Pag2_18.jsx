import BackgroundBege from "../../components/features/PadraoCap2/TelaBege";
import RiddleQuizModal from "../../components/features/PadraoCap2/QuizModal";
import { RiddleContentWrapper, NumberTag, QuestionText } from "./Styles";
const C2_Tela_18 = () => {
  const charada = {
    number: 5,
    question:
      "Tenho cinco dedos e gosto de segurar, sem mim fica difícil escrever ou desenhar. Quem sou eu?",
    answer: "Mão",
    hint: "ELA COMEÇA COM A LETRA 'M'",
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
        <NumberTag left='5%'>
          <span>{charada.number}</span>
        </NumberTag>

        <QuestionText>{charada.question}</QuestionText>
      </RiddleContentWrapper>
    </BackgroundBege>
  );
};

export default C2_Tela_18;
