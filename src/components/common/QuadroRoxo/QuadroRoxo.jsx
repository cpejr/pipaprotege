import { StyledQuadroRoxo } from "./QuadroRoxoStyled";

const QuadroRoxo = ({ children, isSpeechBubble, ...rest }) => {
  return (
    <StyledQuadroRoxo $isSpeechBubble={isSpeechBubble} {...rest}>
      {children}
    </StyledQuadroRoxo>
  );
};

export default QuadroRoxo;
