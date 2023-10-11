import { Container } from "./styles"

export const LineSeparator = ({ w, mt, bg, mb }) => {
  return (
    <Container
      style={{
        width: w,
        marginTop: mt,
        marginBottom: mb,
        backgroundColor: bg
      }}
    >
    </Container>
  )
}