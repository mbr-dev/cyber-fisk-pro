import { Container } from "./styles"

export const LineSeparator = ({ w, mt, bg, mb }) => {
  return (
    <Container
      style={{
        width: w,
        marginTop: mt ? mt : 10,
        marginBottom: mb ? mb : 10,
        backgroundColor: bg ? bg : "#E6E6E6"
      }}
    >
    </Container>
  )
}