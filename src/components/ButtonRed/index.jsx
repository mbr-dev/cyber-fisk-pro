import { Play } from "lucide-react";

import { ButtonContainer } from "./styles";

export const ButtonRed = ({ title, hasIcon, onPlay }) => {
  return (
    <ButtonContainer onClick={onPlay}>
      <p>{title}</p>

      {hasIcon &&
        <Play size={24} strokeWidth={2.5} />
      }
    </ButtonContainer>
  )
}