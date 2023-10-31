import { defaultTheme } from "../../themes/defaultTheme";

import { Container } from "./styles"

export const ButtonAnswer = ({ w, h, children, onPress, disabledButton, bgColor }) => {
  return (
    <Container 
      onClick={onPress}
      style={{
        width: w,
        height: h,
        opacity: disabledButton ? "0.3" : "1",
        backgroundColor: bgColor ? defaultTheme["gray-400"] : "",
        color: bgColor ? defaultTheme["gray-400"] : "",
      }}
      disabled={disabledButton}
    >
      {children}
    </Container>
  )
}