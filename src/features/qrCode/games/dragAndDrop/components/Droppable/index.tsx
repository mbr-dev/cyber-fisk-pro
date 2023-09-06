import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Container } from "./style";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  return (
    <Container ref={setNodeRef} $isOver={isOver}>
      {props.children}
    </Container>
  );
}
