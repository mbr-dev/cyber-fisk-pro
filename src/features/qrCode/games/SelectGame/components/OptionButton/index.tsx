import React from "react";

import { ContainerButton, StyledButton } from "./style";

export function OptionButton(props) {
  return (
    <ContainerButton order={props?.order} $border={props?.$border}>
      {props.correct && "🟢"}
      <StyledButton
        id={props?.id}
        onClick={props?.onClick}
        disabled={props?.disabled}
      >
        {props?.children}
      </StyledButton>
    </ContainerButton>
  );
}
