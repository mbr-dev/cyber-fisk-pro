import { useState, useEffect } from "react";

import { TopMenuHeader } from "../../components/TopMenuHeader";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";

import { apiBookLessons } from "../../lib/apiBookLessons"

import { ButtonLesson, SelectLessonContainer, SelectLessonMain, SelectLessonArea } from "./styles";

export const SelectLesson = () => {
  const [activity, setActivity] = useState([
    { id: 1, numero: 1, label: "Lesson" },
    { id: 2, numero: 2, label: "Lesson" },
    { id: 3, numero: 3, label: "Lesson" },
    { id: 4, numero: 4, label: "Lesson" },
    { id: 5, numero: 4, label: "Lesson" },
    { id: 6, numero: 4, label: "Lesson" },
    { id: 7, numero: 4, label: "Lesson" },
    { id: 8, numero: 4, label: "Lesson" },
    { id: 9, numero: 4, label: "Lesson" },
  ]);

  async function fetchLessons() {
    const response = await apiBookLessons.get()

    console.log(response);
  }

  useEffect(() => {
    fetchLessons();
  }, [])

  return (
    <SelectLessonContainer>
      <TopMenuHeader title="Essentials" />

      <SelectLessonMain>
        <SelectLessonArea>
          {activity.map((item) => {
            return (
              <ButtonLesson key={item.id}>
                <p>{item.numero}</p>
                <span>{item.label}</span>
              </ButtonLesson>
            )
          })}
        </SelectLessonArea>
      </SelectLessonMain>

      <AreaButtonBottom />
    </SelectLessonContainer>
  )
}
