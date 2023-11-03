import { defaultTheme } from "../../themes/defaultTheme";

import { Container } from "./styles"

export const ButtonAnswer = ({ w, h, children, onPress, disabledButton, bgColor, optionColor }) => {
  return (
    <Container 
      onClick={onPress}
      style={{
        width: w,
        height: h,
        backgroundColor: bgColor ? defaultTheme["gray-400"] : "",
        color: bgColor ? defaultTheme["gray-400"] : "",
        borderColor: optionColor === 1 && defaultTheme["red-200"],
      }}
      disabled={disabledButton}
    >
      {children}
    </Container>
  )
}