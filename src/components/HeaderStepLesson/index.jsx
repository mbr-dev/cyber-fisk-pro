import { Container, Content } from "./styles";

export function HeaderStepLesson(props) {
  return(
    <Container>
      <Content style={{backgroundColor: props.color}}/>
    </Container>
  )
}