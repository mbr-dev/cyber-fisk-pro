import { Container, Letter } from "./styles"

export const ModalEnd = ({ wordRight }) => {
  const letters = wordRight.split("");
  return (
    <Container>
      {letters.map((letter, index) => {
        return (
          <Letter key={index}>{letter}</Letter>
        )
      })}
    </Container>
  )
}