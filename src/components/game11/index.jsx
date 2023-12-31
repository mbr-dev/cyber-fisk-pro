import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade, Score, ScoreFinal, PointRule } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Answers, Questions, Button } from "./styles";

export const Game11 = () => {
  const {
    setNewContainer, setNewPontos, rodadaGeral, setNewRodada, nivel, conteudoFacil, conteudoMedio, conteudoDificil, pontosD, pontosF, pontosM, setNewAtividade, setNewNivel, numSelLesson, numTask
  } = useContext(LessonContext);

  const navigate = useNavigate();

  const [colorQuestions, setColorQuestions] = useState([]);
  const [colorAnswers, setColorAnswer] = useState([]);
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
  const [blockQuestions, setBlockQuestions] = useState(true);
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

    setColorAnswer(Array(items.resposta.length).fill(0));
    setColorQuestions(Array(items.pergunta.length).fill(0));

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

    setBlockQuestions(false);
    setIsLoading(false);
  }, [setIsLoading, setData, setRandomNumber, round, setColorQuestions, setColorQuestions, setIdClickQuestion, setQuestions, setIdClickAnswer, setAnswers, setBlockQuestions])

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);

    setColorAnswer(Array(items.resposta.length).fill(0));
    setColorQuestions(Array(items.pergunta.length).fill(0));

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

    setRightQuestions([]);
    setRightAnswers([]);
    setBlockQuestions(false);
    setBlockAnswers(true);
  }

  const handleGetQuestion = (index) => {
    if (blockQuestions) {
      setSelectedQuestionIndex(null);
      setBlockQuestions(false);
    } else {
      let clicks = countClick;
      clicks++;
      setCountClick(clicks);

      let tempId = index;
      setSelectedQuestionIndex(tempId);
      setBlockQuestions(true);
      setBlockAnswers(false);
    }
  }

  const handleGetAnswer = (index) => {
    if (blockAnswers) return;

    let tempColorQ = colorQuestions;
    let tempColorA = colorAnswers;
    let tempRightPoints;

    const selectedQuestion = questions[selectedQuestionIndex];
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === selectedQuestion.status) {
      if (countClick < 3) {
        tempColorQ[selectedQuestionIndex] = 1;
        setColorQuestions(tempColorQ);
        tempColorA[index] = 1;
        setColorAnswer(tempColorA);

        setRightAnswers(state => [...state, index]);
        setRightQuestions(state => [...state, selectedQuestionIndex]);
        setBlockQuestions(false);
        setBlockAnswers(true);
        return;
      }

      tempColorQ[selectedQuestionIndex] = 1;
      setColorQuestions(tempColorQ);
      tempColorA[index] = 1;
      setColorAnswer(tempColorA);

      tempRightPoints = PointRule(nivel, rightPoints);
      setRightPoints(tempRightPoints);
      setNewPontos(nivel, tempRightPoints);
    } else {
      tempColorQ[selectedQuestionIndex] = 2;
      setColorQuestions(tempColorQ);
      tempColorA[index] = 2;
      setColorAnswer(tempColorA);

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
      setNewPontos(0,0);
      setTimeout(() =>{
        setCountClick(0);
        navigate("/GameOver");
        setNewContainer(1);
      },1500);
    } else if (rule === "Score") {
      const pontos = Score(pontosF, pontosM, pontosD);
      const page = ScoreFinal(pontos, numSelLesson, numTask);
      navigate(`/${page}`);
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
      <TitleLesson title="Match the question to their answers." />

      <Main>
        <Questions>
          {questions.map((question, index) => {
            const disabledQ = rightQuestions.includes(index);
              return (
                <Button 
                  key={index}
                  onClick={() => handleGetQuestion(index)}
                  style={{
                    opacity: (blockQuestions && selectedQuestionIndex === index) || disabledQ ? 0.5 : 1,
                    borderColor: colorQuestions[index] === 0 ? "" : colorQuestions[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"]
                  }}
                  disabled={disabledQ}
                >
                  <p>{question.label}</p>
                </Button>
              )
          })}
        </Questions>

        <Answers>
          {answers.map((answer, index) => {
            const disabledA = rightAnswers.includes(index);
            return (
              <Button 
                key={index}
                onClick={() => handleGetAnswer(index)}
                style={{
                  borderColor: colorAnswers[index] === 0 ? "" : colorAnswers[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"]
                }}
                disabled={disabledA}
              >
                <p>{answer.label}</p>
              </Button>
            )
          })}
        </Answers>
      </Main>
    </Container>
  )
}