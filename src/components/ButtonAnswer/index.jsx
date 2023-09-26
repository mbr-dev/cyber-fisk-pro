import { defaultTheme } from "../../themes/defaultTheme";

import { Container } from "./styles"

export const ButtonAnswer = ({ w, h, children, onPress, optionColor }) => {
  return (
    <Container 
      onClick={onPress}
      style={{
        width: w,
        height: h,
        borderColor: optionColor === 0 ? "" : optionColor === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"]
      }}
    >
      {children}
    </Container>
  )
}