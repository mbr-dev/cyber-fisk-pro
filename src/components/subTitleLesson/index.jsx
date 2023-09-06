import React from "react";
import { SubtitleLessonContainer } from "./styles";


export function SubtitleLesson({ title }) {
  return(
    <>
      <SubtitleLessonContainer>
        <span className='title'>{title}</span>
      </SubtitleLessonContainer>
    </>
  )
}