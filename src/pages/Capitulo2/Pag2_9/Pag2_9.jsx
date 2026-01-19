import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import {
  TelaCenario,
  BotaoContainer,
  GameArea,
  NameTarget,
  NameTargetContainer,
  OrganImage,
  OrganTray,
} from "./Pag9Styled.js";

import pulmoes from "../../../assets/Capitulo2/pulmao.png";
import coracao from "../../../assets/Capitulo2/coracao.png";
import estomago from "../../../assets/Capitulo2/estomago.png";
import figado from "../../../assets/Capitulo2/figado.png";
import cerebro from "../../../assets/Capitulo2/cerebro.png";
import rins from "../../../assets/Capitulo2/rins.png";
import intestino from "../../../assets/Capitulo2/intestino.png";

const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GAME_DATA = [
  { id: "estomago", name: "estômago", image: estomago, matched: false },
  { id: "rins", name: "rins", image: rins, matched: false },
  { id: "intestino", name: "intestino", image: intestino, matched: false },
  { id: "figado", name: "fígado", image: figado, matched: false },
  { id: "pulmoes", name: "pulmões", image: pulmoes, matched: false },
  { id: "cerebro", name: "cérebro", image: cerebro, matched: false },
  { id: "coracao", name: "coração", image: coracao, matched: false },
];

const C2_Tela_9 = () => {
  const navigate = useNavigate();
  const [organState, setOrganState] = useState(GAME_DATA);
  const [draggingId, setDraggingId] = useState(null);

  const [shuffledTargets, setShuffledTargets] = useState(() => shuffleArray(GAME_DATA));
  const [shuffledOrgans, setShuffledOrgans] = useState(() => shuffleArray(GAME_DATA));

  const handleAdvance = () => {
    const allMatched = organState.every((organ) => organ.matched);
    if (allMatched) {
      navigate("/capitulo2/tela-10");
    } else {
      navigate("/capitulo2/tela-10");
    }
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("organId", id);
    setDraggingId(id);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedOrganId = e.dataTransfer.getData("organId");

    if (draggedOrganId === targetId) {
      setOrganState((prevState) =>
        prevState.map((organ) =>
          organ.id === draggedOrganId ? { ...organ, matched: true } : organ
        )
      );
    }
    setDraggingId(null);
  };

  const renderTargets = () => {
    return shuffledTargets.map((target) => {
      const organData = organState.find((o) => o.id === target.id);
      const isCorrect = organData?.matched;

      const lockedOrgan = isCorrect ? (
        <OrganImage
          key={target.id + "-locked"}
          src={target.image}
          alt={target.name}
          $isLocked={true}
        />
      ) : null;

      return (
        <NameTargetContainer key={target.id + "-target"}>
          <NameTarget
            $isCorrect={isCorrect}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, target.id)}
          >
            {lockedOrgan}
            {target.name.toUpperCase()}
          </NameTarget>
        </NameTargetContainer>
      );
    });
  };

  const renderOrgans = () => {
    return shuffledOrgans
      .filter((organ) => !organState.find((o) => o.id === organ.id)?.matched)
      .map((organ) => (
        <OrganImage
          key={organ.id}
          src={organ.image}
          alt={organ.name}
          draggable='true'
          onDragStart={(e) => handleDragStart(e, organ.id)}
          onDragEnd={handleDragEnd}
          $isDragging={draggingId === organ.id}
        />
      ));
  };

  return (
    <TelaCenario>
      <GameArea>
        {renderTargets()}
        <OrganTray style={{ gridRow: "4 / 5", gridColumn: "1 / -1" }}>{renderOrgans()}</OrganTray>
      </GameArea>

      <BotaoContainer>
        <Button onClick={handleAdvance} type='avancar'>
          AVANÇAR
        </Button>
      </BotaoContainer>
    </TelaCenario>
  );
};

export default C2_Tela_9;
