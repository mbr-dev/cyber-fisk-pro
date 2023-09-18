import { HeaderStepLessonContainer, HeaderStepLessonContent } from "./styles";

export function HeaderStepLesson(props) {
  return(
    <HeaderStepLessonContainer>
      <HeaderStepLessonContent style={{backgroundColor: props.color}}/>
    </HeaderStepLessonContainer>
  )
}