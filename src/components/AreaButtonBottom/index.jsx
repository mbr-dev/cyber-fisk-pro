import { ButtonRed } from "../ButtonRed";

import { AreaButtonBottomContainer, LineSeparator } from "./styles";

export const AreaButtonBottom = ({ title, hasIcon }) => {
  return (
    <AreaButtonBottomContainer>
      <LineSeparator />
      
      {hasIcon ?
        <ButtonRed title={title} hasIcon />
        :
        <ButtonRed title={title} />
      }
    </AreaButtonBottomContainer>
  )
}