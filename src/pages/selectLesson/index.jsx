import { useState, useEffect } from "react";

import { TopMenuHeader } from "../../components/TopMenuHeader";
import { ButtonBg } from "../../components/ButtonBg";
import { Loading } from "../../components/Loading";

import { api } from "../../lib/api"
import { AppError } from "../../utils/AppError";

import { ButtonLesson, Container, Main, SelectLessonArea } from "./styles";

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
  }, []);

  return (
    <Container>
      {isLoading && <Loading />}

      <TopMenuHeader title="Essentials" />
      <Main>
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
      <ButtonBg title="Home" w="15.875rem" h="2.5rem" />
      </Main>
    </Container>
  )
}
