import { useContext, useEffect } from "react";

import { LessonContext } from "../../context/lesson";

import { SubtitleSuperLessonContainer, SubtitleSuperLessonContent, BoxLetters } from "./style";

export const SubTitleSuperLesson = (props) => {
  const { superTask } = useContext(LessonContext);

 /*  const fields = (el) => {
    return (
      <div className='boxLetter'>
        <span className='desc'>{el}</span>
      </div>
    )
  }
  useEffect(() => {
    fields();
  }, []); */

  return (
    <SubtitleSuperLessonContainer>
      <SubtitleSuperLessonContent>
        {superTask.map((task, index) => {
          //return (fields(x))

          return (
          <BoxLetters key={index}>
            <p>{task}</p>
          </BoxLetters>
        )
        })}
      </SubtitleSuperLessonContent>
      {/* {fields()} */}
    </SubtitleSuperLessonContainer>
  )
}