import { HeaderStepLessonEndContainer, HeaderStepLessonEndContent } from "./styles";

export function HeaderStepLessonEnd(props) {
  return(
    <HeaderStepLessonEndContainer>
      <HeaderStepLessonEndContent style={{backgroundColor: props.color}}/>
    </HeaderStepLessonEndContainer>
  )
}