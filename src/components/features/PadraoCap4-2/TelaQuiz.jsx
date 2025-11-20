import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PistaModal from "../../features/PadraoCap4-2/PistaModal.jsx";

import {
  QuizContainer,
  PlacaNumero,
  ContextoTexto,
  LightButton,
  DecisaoTexto,
  OverlayMessage,
  SemaforoComponente,
} from "./TelaQuizStyled.js";

const QuizScreen = ({ pageNumber, contextText, correctColor, pistaText, onAdvance, ...rest }) => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => {
        setShowOverlay(null);
        if (isAnswered) {
          onAdvance();
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showOverlay, isAnswered, onAdvance]);

  const handleAnswer = (color) => {
    if (isAnswered) return;

    if (color === correctColor) {
      setShowOverlay("Resposta Correta");
      setIsAnswered(true);
    } else {
      setShowOverlay("Resposta Incorreta");
    }
  };

  return (
    <QuizContainer {...rest}>
      <SemaforoComponente />
      <PlacaNumero>{pageNumber}</PlacaNumero>

      <ContextoTexto>{contextText}</ContextoTexto>

      {["red", "yellow", "green"].map((color) => (
        <React.Fragment key={color}>
          <LightButton $color={color} onClick={() => handleAnswer(color)} disabled={isAnswered} />

          <DecisaoTexto $variant={color}>
            {color === "red" && `Estranho e com medo. Diga "não" e peça ajuda!`}
            {color === "yellow" && `Confuso e incomodado. Diga "não" e peça ajuda!`}
            {color === "green" && `Seguro e protegido.`}
          </DecisaoTexto>
        </React.Fragment>
      ))}

      <PistaModal pistaText={pistaText} />

      {showOverlay && (
        <OverlayMessage $variant={showOverlay}>{showOverlay.toUpperCase()}</OverlayMessage>
      )}
    </QuizContainer>
  );
};

export default QuizScreen;
