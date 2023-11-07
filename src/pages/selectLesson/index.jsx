import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CyberContext } from "../../context/cyber";
import { LessonContext } from "../../context/lesson";

import { Loading } from "../../components/Loading";
import { HeaderText } from "../../components/HeaderText";
import { FooterBtnHome } from "../../components/FooterBtnHome";
import { Notifications } from "../../components/Notifications";

import { apiQAS } from "../../lib/api"
import { AppError } from "../../utils/AppError";

import { ButtonLesson, Container, Main, SelectLessonArea } from "./styles";

export const SelectLesson = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { book, chooseNotification } = useContext(CyberContext);
  const { setNewSelLesson } = useContext(LessonContext);
  const [msgError, setMsgError] = useState("");
  const [error, setError] = useState(false);

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const fetchLessons = async() => {
    try {
      setIsLoading(true);
      await apiQAS.get(`/Modulos/Lessons?idLivro=${book.id}`)
      .then((resp) => {
        console.log('resp :: ', resp.data);
        setActivities(resp.data.dados);
        setIsLoading(false);
      })
    } catch(error) {
      setIsLoading(false);
      const isAppError = error instanceof AppError;
      const titleError = isAppError ? error.message : "Servidor fora do ar tente novamente mais tarde";
      chooseNotification(3);
      setMsgError(titleError);
      setError(true);
    } finally {
      setIsLoading(false);
    }

  }

  const clickLesson = (id) => {
    setNewSelLesson(id);
    navigate("/LessonSelection");
  }

  useEffect(() => {
    fetchLessons();
  }, []);

  if (isLoading) {
    return <Loading />
  }
  
  function clickAlert(){
    setError(false);
  }

  return (
    <Container>
      <HeaderText title={book.name} />

      <Main>
        {error ? <Notifications description={msgError} event={clickAlert}/> : null}
        <SelectLessonArea>
          {activities.map((activity) => {
            return (
              <ButtonLesson key={activity.Id} disabled={activity.Status === 0 ? true : false} onClick={() => {activity.Status === 1 ? clickLesson(activity.Numero) : null}}>
                <p>{activity.Numero}</p>
                <span>{activity.Label}</span>
              </ButtonLesson>
            )
          })}
        </SelectLessonArea>
      </Main>
      
      <FooterBtnHome 
        fs={isDesktop && "32px"}
        wl={isDesktop ? "48%" : "80%"}
        hasLS
        w={isDesktop && "450px"}
        h={isDesktop && "52px"}
      />
    </Container>
  )
}
