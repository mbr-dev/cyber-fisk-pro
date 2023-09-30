import React from "react";
import { Triangle } from "lucide-react";

import { ContainerSelectButton, StyledSelectButton } from "./style";
import { colors } from "../../../../../../config/colors";

export const SelectButton = (props) => {
  return (
    <ContainerSelectButton $show={props?.$show}>
      <StyledSelectButton onClick={props?.onClick} disabled={props?.disabled}>
        {props?.children}
        <Triangle
          fill={colors["gray-800"]}
          stroke={colors["gray-800"]}
          style={{
            transform: `rotate(${props?.$show ? "0" : "180deg"})`,
            transition: "transform 0.5s"
          }}
        />
      </StyledSelectButton>
    </ContainerSelectButton>
  );
};
