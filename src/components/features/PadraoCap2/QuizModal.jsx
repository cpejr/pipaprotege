import styled from "styled-components";
import InputModal from "../../common/Modal/InputModal";

const RiddleContentWrapper = styled.div`
  position: relative;
  padding: 10px 10px 10px 0px;
  font-family: Arial, sans-serif;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionText = styled.p`
  font-size: 22px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 25px;
  width: 100%;
  font-weight: 500;
  padding-left: 20px;
  padding-right: 20px;
`;

const NumberTag = styled.div`
  position: absolute;
  top: -30px;
  left: -30px;
  width: 40px;
  height: 40px;

  background-color: #64f5a7;
  border-radius: 5px;
  transform: rotate(45deg);

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    color: black;
    font-weight: bold;
    font-size: 30px;
  }
`;

function RiddleQuizModal({
  riddleNumber,
  questionText,
  correctAnswer,
  answerHint,
  nextPath,
  defaultOpen = true,
}) {
  const newPlaceholder = `DIGITE AQUI A SUA RESPOSTA\n${answerHint}\nDEPOIS CLIQUE EM "OK" PARA SALVAR`;

  return (
    <InputModal
      defaultOpen={defaultOpen}
      showButton={false}
      nextPath={nextPath}
      correctAnswer={correctAnswer}
      initialPlaceholder={newPlaceholder}
    >
      <RiddleContentWrapper>
        <NumberTag>
          <span>{riddleNumber}</span>
        </NumberTag>

        <QuestionText>{questionText}</QuestionText>
      </RiddleContentWrapper>
    </InputModal>
  );
}

export default RiddleQuizModal;
