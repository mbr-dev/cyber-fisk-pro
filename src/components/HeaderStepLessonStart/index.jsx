import React from "react";

import { HeaderStepLessonStartContainer, HeaderStepLessonStartContent } from "./styles";

export function HeaderStepLessonStart({ color }) {
  return(
    <HeaderStepLessonStartContainer>
      <HeaderStepLessonStartContent style={{backgroundColor: color}}/>
    </HeaderStepLessonStartContainer>
  )
}