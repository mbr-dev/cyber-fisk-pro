import React from "react";

import { SubtitleLessonContainer } from "./styles";

export const SubTitleLesson = ({ title }) => {
  return(
    <SubtitleLessonContainer>
      <span className="title">{title}</span>
    </SubtitleLessonContainer>
  )
}