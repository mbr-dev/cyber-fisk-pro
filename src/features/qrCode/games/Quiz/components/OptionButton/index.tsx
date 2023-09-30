import React from "react";

import { ContainerButton, StyledButton } from "./style";

export const OptionButton = (props) => {
  return (
    <ContainerButton order={props?.order}>
      {props.correct && "🟢"}
      <StyledButton
        id={props.id}
        $show={props.show}
        onClick={props.onClick}
        disabled={props?.disabled}
      >
        {props.children}
      </StyledButton>
    </ContainerButton>
  );
};
