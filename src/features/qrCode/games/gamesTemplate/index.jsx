import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  BackgroundHeader,
  Title,
  ContainerMain,
  BackgroundGame,
  ContainerGame
} from "./style";
import { GamesFooter } from "./components/Footer";
import { GamesHeader } from "./components/Header";
import { URL_HMLG, URL_HMLG_PRO } from "../../../../config/infos";
import { DragAndDropGame } from "../DragAndDrop";
import { ListenAndClick } from "../ListenAndClick";
import { ListenAndType } from "../ListenAndType";
import { SelectGame } from "../SelectGame";
// import { games } from "../../assets/questions.json";
import { Quiz } from "../Quiz";
import { ListenAndClickMap } from "../ListenAndClickMap";
import { Toast } from "../components/Toast";
import { Load } from "../../components/Load";
import { NotFound } from "../../components/NotFound";
import { Score } from "../../components/Score";
import { api } from "../../../../lib/axios";
import { getGameTitle } from "../../../../utils";

export const GamesTemplate = () => {
  const { code } = useParams();
  const [questions, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [game, setGame] = useState(null);
  const [errorFetch, setErrorFetch] = useState(null);
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
          `${URL_HMLG_PRO}api/QrCode/Validacao?codigo=${code}`
        );
        console.log("res", data);
        if (data.erro) {
          console.log("err", data.erro);
          setErrorFetch(
            data.erro.txt === "Código inválido!" ? "Não encontrado" : "Erro"
          );
          return;
        }
        setQuestion(data?.dados);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorFetch("Erro");
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
        <NotFound hasError={errorFetch} />
      ) : (
        <Container>
          <BackgroundHeader>
            <GamesHeader
              questions={questions}
              answeredQuestions={answeredQuestions}
            />
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
};
