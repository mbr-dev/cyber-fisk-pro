import { defaultTheme } from "../../themes/defaultTheme";
import { Container } from "./styles";

export const LineSeparator = ({ wl, bg }) => {
  return (
    <Container
      style={{
        width: wl,
        backgroundColor: bg ? bg : defaultTheme["gray-200"],
      }}
    >
    </Container>
  )
}