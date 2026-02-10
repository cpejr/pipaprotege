import styled from "styled-components";
import InputModal from "../../common/Modal/InputModal";

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
    ></InputModal>
  );
}

export default RiddleQuizModal;
