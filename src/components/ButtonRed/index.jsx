import { Play } from "lucide-react";

import { Container } from "./styles";

export const ButtonRed = ({ title, hasIcon, onPress, greenBtn, type="button", mt, form }) => {
  return (
    <Container 
      onClick={onPress}
      $greenBtn={greenBtn}
      type={type}
      form={form}
      style={{
        marginTop: mt
      }}
      >
      <p>{title}</p>

      {hasIcon &&
        <Play size={24} strokeWidth={2.5} />
      }
    </Container>
  )
}