import { defaultTheme } from "../../themes/defaultTheme";

import { Container } from "./styles"

export const ButtonAnswer = ({ w, h, fs, children, onPress, disabledButton, bgColor, cl, optionColor }) => {
  return (
    <Container 
      onClick={onPress}
      style={{
        width: w,
        height: h,
        backgroundColor: bgColor ? bgColor : "",
        color: cl ? cl : "",
        borderColor: optionColor === 1 && defaultTheme["red-200"],
        fontSize: fs ? fs : "16px",
      }}
      disabled={disabledButton}
    >
      {children}
    </Container>
  )
}