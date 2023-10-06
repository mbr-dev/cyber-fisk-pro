import { Play } from "lucide-react";

import { ButtonContainer } from "./styles";

export const ButtonRed = ({ title, hasIcon, onPress }) => {
  return (
    <ButtonContainer onClick={onPress}>
      <p>{title}</p>

      {hasIcon &&
        <Play size={24} strokeWidth={2.5} />
      }
    </ButtonContainer>
  )
}