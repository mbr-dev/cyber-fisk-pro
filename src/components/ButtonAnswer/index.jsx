import { defaultTheme } from "../../themes/defaultTheme";

import { Container } from "./styles"

export const ButtonAnswer = ({ w, h, children, onPress, optionColor, disabledButton }) => {
  return (
    <Container 
      onClick={onPress}
      style={{
        width: w,
        height: h,
        opacity: disabledButton ? "0.5" : "1",
        borderColor: optionColor === 1 ? defaultTheme["green-200"] : optionColor === 2 ? defaultTheme["red-200"] : ""
      }}
      disabled={disabledButton}
    >
      {children}
    </Container>
  )
}