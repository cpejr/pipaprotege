import React, { useState } from "react";
import styled from "styled-components";
import { DndContext, rectIntersection, useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Container, ArrowButton } from "./Styles";

const words = [
  { id: "pulmoes", label: "pulmões", target: "pulmoes" },
  { id: "coracao", label: "coração", target: "coracao" },
  { id: "estomago", label: "estômago", target: "estomago" },
  { id: "figado", label: "fígado", target: "figado" },
  { id: "rins", label: "rins", target: "rins" },
  { id: "intestino", label: "intestino", target: "intestino" },
  { id: "cerebro", label: "cérebro", target: "cerebro" },
];

const DZ = {
  cerebro: { x: 6.5, y: 80, w: 12, h: 11 },
  estomago: { x: 19, y: 80, w: 12, h: 10 },
  intestino: { x: 30.5, y: 80, w: 14, h: 11 },
  rins: { x: 42.5, y: 80, w: 10, h: 10 },
  figado: { x: 55, y: 80, w: 14, h: 11 },
  pulmoes: { x: 72.5, y: 76.5, w: 18, h: 16 },
  coracao: { x: 78.5, y: 81, w: 6.5, h: 10 },
};

const pct = (v) => `${v}%`;

function Chip({ id, label, disabled }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id, disabled });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: disabled ? 0.35 : 1,
    cursor: disabled ? "default" : "grab",
  };
  return (
    <ChipTag ref={setNodeRef} style={style} {...listeners} {...attributes} aria-disabled={disabled}>
      {label}
    </ChipTag>
  );
}

function DropArea({ id, rectPct, active }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <DZBox
      ref={setNodeRef}
      style={{
        top: pct(rectPct.y),
        left: pct(rectPct.x),
        width: pct(rectPct.w),
        height: pct(rectPct.h),
      }}
      $visible={active}
      $highlight={isOver}
    />
  );
}

export default function Capitulo2_9() {
  const [placed, setPlaced] = useState({});
  const [dragging, setDragging] = useState(false);

  const onDragStart = () => setDragging(true);
  const onDragEnd = ({ active, over }) => {
    setDragging(false);
    if (!over) return;
    const word = words.find((w) => w.id === active.id);
    if (word && over.id === word.target) {
      setPlaced((p) => ({ ...p, [word.id]: true }));
    }
  };

  return (
    <Container bg='9'>
      <DndContext
        collisionDetection={rectIntersection}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {Object.entries(DZ).map(([id, rect]) => (
          <DropArea key={id} id={id} rectPct={rect} active={dragging} />
        ))}

        <TopRow>
          {words.map((w) => (
            <Chip key={w.id} id={w.id} label={w.label} disabled={!!placed[w.id]} />
          ))}
        </TopRow>
      </DndContext>

      <ArrowButton to='/capitulo-2/10'>
        <span className='label'>AVANÇAR</span>
        <span className='icon'>
          <ArrowRightOutlined />
        </span>
      </ArrowButton>
    </Container>
  );
}

const TopRow = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  gap: clamp(12px, 2vw, 22px);
  justify-content: space-between;
  pointer-events: none;
  z-index: 2;
`;

const ChipTag = styled.div`
  pointer-events: auto;
  background: #fff;
  border: 3px dashed #2c2c2c;
  border-radius: 28px;
  padding: clamp(8px, 1.2vw, 12px) clamp(16px, 2vw, 24px);
  font: 700 clamp(16px, 2.2vw, 24px) Arial, sans-serif;
  line-height: 1;
  white-space: nowrap;
`;

const DZBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 14px;
  border: 3px dashed rgba(120, 105, 160, ${({ $highlight }) => ($highlight ? 0.85 : 0.35)});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s ease;
  z-index: 1;
`;
