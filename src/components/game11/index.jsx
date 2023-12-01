import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Div, Button } from "./styles";

export const Game11 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask, statusColor, setStatusColor
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [colorAnswer, setColorAnswer] = useState([0, 0, 0, 0, 0]);
  const [colorQuestions, setColorQuestions] = useState([0, 0, 0]);
  const [idClickQuestion, setIdClickQuestion] = useState([]);
  const [idClickAnswer, setIdClickAnswer] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockAnswers, setBlockAnswers] = useState(true);
  const [countClick, setCountClick] = useState(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [rightQuestions, setRightQuestions] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadLesson = useCallback(() => {
    setIsLoading(true);

    let dataLength = 0;
    let tempData;
    if (nivel === 0) {
      setData(conteudoFacil);
      tempData = conteudoFacil;
      dataLength = conteudoFacil.length;
    } else if (nivel === 1) {
      setData(conteudoMedio);
      tempData = conteudoMedio;
      dataLength = conteudoMedio.length;
    } else {
      setData(conteudoDificil);
      tempData = conteudoDificil;
      dataLength = conteudoDificil.length;
    }

    let tempRandom = [];
    for (let a = 0; a < dataLength; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandom);

    const items = JSON.parse(tempData[tempRandom[round]].conteudo);

    let tempRandomQ = [...Array(items.pergunta.length).keys()];
    tempRandomQ = tempRandomQ.sort(() => Math.random() - 0.5);
    setIdClickQuestion(tempRandomQ);

    let tempQ = [];
    for (let a = 0; a < items.pergunta.length; a++) {
      tempQ.push(items.pergunta[tempRandomQ[a]]);
    }
    setQuestions(tempQ);

    let tempRandomAnswer = [...Array(items.resposta.length).keys()];
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomAnswer);

    let tempAnswers = [];
    for (let a = 0; a < items.resposta.length; a++) {
      tempAnswers.push(items.resposta[tempRandomAnswer[a]]);
    }
    setAnswers(tempAnswers);

    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setIdClickQuestion, setQuestions, setIdClickAnswer, setAnswers])

  const newRound = (number) => {
    setRightQuestions([]);
    setRightAnswers([]);
    setColorAnswer([0, 0, 0, 0, 0]);
    setColorQuestions([0, 0, 0]);

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    let tempRandomQ = [...Array(items.pergunta.length).keys()];
    tempRandomQ = tempRandomQ.sort(() => Math.random() - 0.5);
    setIdClickQuestion(tempRandomQ);

    let tempQ = [];
    for (let a = 0; a < tempRandomQ.length; a++) {
      tempQ.push(items.pergunta[tempRandomQ[a]]);
    }
    setQuestions(tempQ);

    let tempRandomAnswer = [...Array(items.resposta.length).keys()];
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomAnswer);

    let tempAnswers = [];
    for (let a = 0; a < tempRandomAnswer.length; a++) {
      tempAnswers.push(items.resposta[tempRandomAnswer[a]]);
    }
    setAnswers(tempAnswers);

    setSelectedQuestionIndex(null);
    setBlockAnswers(true);
  }

  const handleGetQuestion = (index) => {
    let tempId = index;
    setSelectedQuestionIndex(tempId);
    setBlockAnswers(false);
  }

  const handleGetAnswer = (index) => {
    if (blockAnswers) return;

    let tempRightPoints;
    let tempColorQ = colorQuestions;
    let tempColorA = colorAnswer;

    const selectedQuestion = questions[selectedQuestionIndex];
    const selectedAnswer = answers[index];

    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    if (selectedAnswer.status === selectedQuestion.status) {
      if (countClick < 2) {
        tempColorQ[index] = 1;
        setColorQuestions(tempColorQ);
        tempColorA[index] = 1;
        setColorAnswer(tempColorQ);

        setRightAnswers(state => [...state, index]);
        setRightQuestions(state => [...state, selectedQuestionIndex]);
        setBlockAnswers(true);
        return;
      }

      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      tempColorQ[index] = 1;
      setColorQuestions(tempColorQ);
      tempColorA[index] = 1;
      setColorAnswer(tempColorQ);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);

      tempColorA[index] = 1;
      setColorAnswer(tempColorQ);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound)

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(nivel, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() =>{
        setCountClick(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(nivel, 0);
      setTimeout(() => {
        navigate("/GameOver");
        setNewContainer(1);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      setTimeout(() => {
        navigate(`/${page}`);
        setStatusColor([0,0,0,0,0,0,0,0,0,0]);
      }, 2000);
    } else {
      setTimeout(() =>{
        setCountClick(0);
        if (nivel === 0) {
          setNewNivel(1);
          const atividade = conteudoMedio[0].id_tipo;
          setNewAtividade(atividade);
        } else {
          setNewNivel(2);
          const atividade = conteudoDificil[0].id_tipo;
          setNewAtividade(atividade);
        }
      },1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    if (rightQuestions.length >= 3 && rightAnswers.length >= 3) {
      let tempRound = round;
      tempRound++;
      let tempGeneralRound = rodadaGeral;
      tempGeneralRound++;

      setTimeout(() => {
        setRound(tempRound);
        setNewRodada(tempGeneralRound);
        newRound(tempRound);
      }, 1500);
    }
  }, [rightQuestions, rightAnswers, round, rodadaGeral, setRound, setNewRodada, newRound]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <TitleLesson title="Match the questions to their answers." />

      <Main>
        <Div>
          {questions.map((question, index) => {
            const disabledQ = rightQuestions.includes(index);
              return (
                <Button 
                  key={index}
                  onClick={() => handleGetQuestion(index)}
                  style={{
                    borderColor: (selectedQuestionIndex === index || disabledQ) && defaultTheme["red-200"]
                  }}
                  disabled={disabledQ}
                >
                  <p>{question.label}</p>
                </Button>
              )
          })}
        </Div>

        <Div>
          {answers.map((answer, index) => {
            const disabledA = rightAnswers.includes(index);
            return (
              <Button 
                key={index}
                onClick={() => handleGetAnswer(index)}
                style={{
                  borderColor: colorAnswer[index] === 1 && defaultTheme["red-200"]
                }}
                disabled={blockAnswers || disabledA}
              >
                <p>{answer.label}</p>
              </Button>
            )
          })}
        </Div>
      </Main>
    </Container>
  )
}