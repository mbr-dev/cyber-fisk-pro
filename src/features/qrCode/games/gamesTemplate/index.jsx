import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  LessonTitle,
  BookTitle,
  LessonBookContainer,
  Space,
} from "./style";
import BackIcon from "../../assets/icons/Icon_Seta_Branca.png";
import GamesFooter from "./components/Footer";
import { URL_HMLG } from "../../../../config/infos";
import DragAndDropGame from "../DragAndDrop";
import ListenAndClick from "../ListenAndClick";
import ListenAndType from "../ListenAndType";
import SelectGame from "../SelectGame";
// import { games } from "../../assets/questions.json";
import Quiz from "../Quiz";
import ListenAndClickMap from "../ListenAndClickMap";
import Toast from "../components/Toast";
import Load from "../../components/Load";
import NotFound from "../../components/NotFound";
import Score from "../../components/Score";
import { api } from "../../../../lib/axios";
import { getBookTitle, getGameTitle } from "../../../../utils";

function GamesTemplate() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [game, setGame] = useState(null);
  const [errorFetch, setErrorFetch] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [infoToast, setInfoToast] = useState({ show: false, error: false });

  const getGameType = useMemo(() => {
    if (!questions?.[0]?.num_licao) return null;
    if (
      questions[0]?.num_licao === 1 ||
      questions[0]?.num_licao === 4 ||
      questions[0]?.num_licao === 8
    ) {
      return (
        <SelectGame
          questions={questions}
          setAnswered={setAnsweredQuestions}
          setInfoToast={setInfoToast}
        />
      );
    } else if (
      questions[0]?.num_licao === 2 ||
      questions[0]?.num_licao === 6 ||
      questions[0]?.num_licao === 10
    ) {
      return (
        <DragAndDropGame
          questions={questions}
          setAnswered={setAnsweredQuestions}
          setInfoToast={setInfoToast}
        />
      );
    } else if (questions[0]?.num_licao === 3 || questions[0]?.num_licao === 9) {
      return (
        <ListenAndClick
          questions={questions}
          setAnswered={setAnsweredQuestions}
          urlSounds={`${URL_HMLG}CyberQR/NovoQR/Essentials%201/Audios/${questions?.[0]?.id_livro}_Lesson${questions?.[0]?.num_licao}_`}
          setInfoToast={setInfoToast}
        />
      );
    } else if (questions[0]?.num_licao === 5) {
      return (
        <ListenAndType
          questions={questions}
          setAnswered={setAnsweredQuestions}
          urlSounds={`${URL_HMLG}CyberQR/NovoQR/Essentials%201/Audios/${questions?.[0]?.id_livro}_Lesson${questions?.[0]?.num_licao}_`}
          setInfoToast={setInfoToast}
        />
      );
    } else if (questions[0]?.num_licao === 7) {
      return (
        <ListenAndClickMap
          questions={questions}
          setAnswered={setAnsweredQuestions}
          urlSounds={`${URL_HMLG}CyberQR/NovoQR/Essentials%201/Audios/${questions?.[0]?.id_livro}_Lesson${questions?.[0]?.num_licao}_`}
          setInfoToast={setInfoToast}
        />
      );
    } else if (
      questions[0]?.num_licao === 11 ||
      questions[0]?.num_licao === 12
    ) {
      return (
        <Quiz
          questions={questions}
          setAnswered={setAnsweredQuestions}
          setInfoToast={setInfoToast}
        />
      );
    } else return "Não encontrado";
  }, [questions]);

  useEffect(() => {
    if (getGameType || errorFetch) setIsLoading(false);
  }, [getGameType, errorFetch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getGameData = async () => {
      try {
        const { data } = await api.get(
          `https://cyberhomolog.fisk.com.br:172/cyberfiskpro/api/QrCode/Validacao?codigo=${code}`
        );
        console.log("res", data);
        if (data.erro) {
          console.log("err", data.erro);
          setErrorFetch(true);
          return;
        }
        setQuestion(data?.dados);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorFetch(true);
      }
    };
    getGameData();
  }, []);

  console.log("sc", showScore);

  return (
    <>
      {isLoading ? (
        <Load />
      ) : errorFetch || getGameType === "Não encontrado" ? (
        <NotFound />
      ) : (
        <Container>
          <BackgroundHeader>
            <Header>
              <BackButton onClick={() => navigate("/qr-code")}>
                <BackImage src={BackIcon} />
              </BackButton>
              <LessonBookContainer>
                <LessonTitle>{`Lesson${questions?.[0]?.num_licao}`}</LessonTitle>
                <BookTitle>{getBookTitle(questions?.[0]?.id_livro)}</BookTitle>
              </LessonBookContainer>
              <ContainerBar>
                <ContentBar>
                  {answeredQuestions.map((question, index) => {
                    return (
                      <MarkerBar key={index} $status={question?.correct} />
                    );
                  })}
                </ContentBar>
              </ContainerBar>
              <Space />
            </Header>
          </BackgroundHeader>
          <ContainerMain>
            <Title>{getGameTitle(questions?.[0]?.id_tipo)}</Title>
            <BackgroundGame>
              <ContainerGame>{getGameType}</ContainerGame>
            </BackgroundGame>
            <GamesFooter setShowScore={setShowScore} />
          </ContainerMain>
          <Toast infoToast={infoToast} />
          {showScore && <Score setShowScore={setShowScore} />}
        </Container>
      )}
    </>
  );
}

export default GamesTemplate;
