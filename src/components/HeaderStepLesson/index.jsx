import { Container, Main } from "./styles";

export function HeaderStepLesson(props) {
  return(
    <Container>
      <Main style={{backgroundColor: props.color}}/>
    </Container>
  )
}