import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BackgroundHeader,
  Header,
  ContainerBar,
  ContentBar,
  MarkerBar,
  BackButton,
  BackImage,
  Title,
  ContainerMain,
  BackgroundGame,
  ContainerGame,
  Footer,
} from "./style";
import BackIcon from "../../assets/icons/Icon_Seta.png";
import { URL_HMLG } from "../../../../config/infos";
import DragAndDropGame from "../DragAndDrop";
import ListenAndClick from "../ListenAndClick";
import ListenAndType from "../ListenAndType";
import SelectGame from "../SelectGame";
import { games } from "../../assets/questions.json";
import Quiz from "../Quiz";
import ListenAndClickMap from "../ListenAndClickMap";
import Toast from "../components/Toast";

function GamesTemplate() {
  const navigate = useNavigate();
  const [questions, setQuestion] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [infoToast, setInfoToast] = useState({ show: false, error: false });
  const idLivro = 53;
  const numLesson = 7;

  useEffect(() => {
    if (!games?.length) return;
    setQuestion(games[2]?.response?.questions);
  }, [games]);

  // console.log("ans", answeredQuestions);

  return (
    <Container>
      <BackgroundHeader>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <BackImage src={BackIcon} />
          </BackButton>
          <ContainerBar>
            <ContentBar>
              {answeredQuestions.map((question, index) => {
                return <MarkerBar key={index} $status={question?.correct} />;
              })}
            </ContentBar>
          </ContainerBar>
          <BackButton onClick={() => navigate(-1)}>
            <BackImage src={BackIcon} />
          </BackButton>
        </Header>
      </BackgroundHeader>
      <ContainerMain>
        <Title>{games[1]?.response?.title}</Title>
        <BackgroundGame>
          <ContainerGame>
            {/* <DragAndDropGame
              questions={questions}
              setAnswered={setAnsweredQuestions}
              setInfoToast={setInfoToast}
            /> */}
            {/* <ListenAndClick
              questions={questions}
              setAnswered={setAnsweredQuestions}
              urlSounds={`${URL_HMLG}CyberQR/NovoQR/Essentials%201/Audios/${idLivro}_Lesson${numLesson}_`}
              setInfoToast={setInfoToast}
            /> */}
            <ListenAndClickMap
              questions={questions}
              setAnswered={setAnsweredQuestions}
              urlSounds={`${URL_HMLG}CyberQR/NovoQR/Essentials%201/Audios/${idLivro}_Lesson${numLesson}_`}
              setInfoToast={setInfoToast}
            />
            {/* <ListenAndType
              questions={questions}
              setAnswered={setAnsweredQuestions}
              urlSounds={`${URL_HMLG}CyberQR/NovoQR/Essentials%201/Audios/${idLivro}_Lesson${numLesson}_`}
              setInfoToast={setInfoToast}
            /> */}
            {/* <SelectGame
              questions={questions}
              setAnswered={setAnsweredQuestions}
              setInfoToast={setInfoToast}
            /> */}
            {/* <Quiz questions={questions} setAnswered={setAnsweredQuestions} 
              setInfoToast={setInfoToast}/> */}
          </ContainerGame>
        </BackgroundGame>
        <Footer />
      </ContainerMain>
      <Toast infoToast={infoToast} />
    </Container>
  );
}

export default GamesTemplate;
