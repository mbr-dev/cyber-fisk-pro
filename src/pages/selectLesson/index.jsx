import { useState, useEffect } from "react";

import { TopMenuHeader } from "../../components/TopMenuHeader";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";
import { Loading } from "../../components/Loading";

import { api } from "../../lib/api"
import { AppError } from "../../utils/AppError";

import { ButtonLesson, SelectLessonContainer, SelectLessonMain, SelectLessonArea } from "./styles";

export const SelectLesson = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLessons = async() => {
    try {
      setIsLoading(true);
      const response = await api.get('/dados')
      setActivities(response.data);
    } catch(error) {
      const isAppError = error instanceof AppError;
      const titleError = isAppError ? error.message : "Servidor fora do ar tente novamente mais tarde";
      alert(titleError);
    } finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    fetchLessons();
  }, [])

  return (
    <SelectLessonContainer>
      {isLoading && <Loading />}

      <TopMenuHeader title="Essentials" />

      <SelectLessonMain>
        <SelectLessonArea>
          {activities.map((activity) => {
            return (
              <ButtonLesson key={activity.Id}>
                <p>{activity.Numero}</p>
                <span>{activity.Label}</span>
              </ButtonLesson>
            )
          })}
        </SelectLessonArea>
      </SelectLessonMain>

      <AreaButtonBottom title="Home" />
    </SelectLessonContainer>
  )
}
