import React from "react";

import { TitleLessonContainer } from "./styles";

export const TitleLesson = ({ title }) => {
  return(
    <TitleLessonContainer>
      <span>{title}</span>
    </TitleLessonContainer>  
  )
}