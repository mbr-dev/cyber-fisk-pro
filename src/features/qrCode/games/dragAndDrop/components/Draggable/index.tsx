import React from "react";
import { useDraggable } from "@dnd-kit/core";
import Fade from "react-reveal/Fade";

import { OptionButton } from "./style";

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: props.id,
      disabled: props.disabled,
    });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        order: props.order,
        touchAction: "none",
        border: props.border,
        zIndex: isDragging ? 99 : 0,
        flex: 1,
        display: "flex",
        alignItems: "center",
        maxHeight: 65,
      }}
      {...listeners}
      {...attributes}
    >
      <OptionButton $show={props.show}>{props.children}</OptionButton>
    </div>
  );
}
