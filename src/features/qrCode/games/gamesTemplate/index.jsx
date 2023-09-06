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
  Sticker,
} from "./style";
import BackIcon from "../../assets/icons/Icon_Seta.png";
import DragAndDropGame from "./../dragAndDrop";
import { response } from "./../../assets/questions.json";

function GamesTemplate() {
  const navigate = useNavigate();
  const [questions, setQuestion] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    setQuestion(response);
  }, []);

  console.log("ans", answeredQuestions);

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
        <Title>Choose the correct alternative.</Title>
        <BackgroundGame>
          <ContainerGame>
            <DragAndDropGame
              questions={questions}
              setAswered={setAnsweredQuestions}
            />
          </ContainerGame>
        </BackgroundGame>
        <Footer>
          <Sticker />
        </Footer>
      </ContainerMain>
    </Container>
  );
}

export default GamesTemplate;
