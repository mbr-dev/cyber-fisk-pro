import { useState, useEffect, useContext, useCallback } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { L4_T2_Facil } from "../../utils/lesson4_Task2";
import { LessonContext } from "../../context/lesson";
import { TrocaAtividade } from "../../utils/regras";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Answers, Questions, Button } from "./styles";

export const Game11 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada} = useContext(LessonContext);

  const [colorQuestions, setColorQuestions] = useState([0, 0, 0]);
  const [colorAnswers, setColorAnswer] = useState([0, 0, 0, 0, 0]);
  const [idClickQuestion, setIdClickQuestion] = useState([0, 1, 2]);
  const [idClickAnswer, setIdClickAnswer] = useState([0, 1, 2, 3, 4]);
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
 
  const loadLesson = useCallback(() => {
    const totalOfQuestions = L4_T2_Facil.length;

    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    //tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);

    let tempRandomQ = idClickQuestion;
    tempRandomQ = tempRandomQ.sort(() => Math.random() - 0.5);
    setIdClickQuestion(tempRandomQ);

    let tempQ = [];
    for (let a = 0; a < idClickQuestion.length; a++) {
      tempQ.push(L4_T2_Facil[tempQuestions[round]].pergunta[tempRandomQ[a]]);
    }
    setQuestions(tempQ);

    let tempRandomAnswer = idClickAnswer;
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomAnswer);

    let tempAnswers = [];
    for (let a = 0; a < idClickAnswer.length; a++) {
      tempAnswers.push(L4_T2_Facil[tempQuestions[round]].resposta[tempRandomAnswer[a]]);
    }
    setAnswers(tempAnswers);

    setBlockQuestions(false);
  }, [setRandomNumber, idClickQuestion, setIdClickQuestion, setQuestions, idClickAnswer, setIdClickAnswer, setAnswers, setBlockQuestions])

  const newRound = (number) => {
    setRightQuestions([]);
    setRightAnswers([]);

    let tempRandomQ= idClickQuestion;
    tempRandomQ = tempRandomQ.sort(() => Math.random() - 0.5);
    setIdClickQuestion(tempRandomQ);

    let tempQ = [];
    for (let a = 0; a < idClickQuestion.length; a++) {
      tempQ.push(L4_T2_Facil[randomNumber[number]].pergunta[tempRandomQ[a]]);
    }
    setQuestions(tempQ);

    let tempRandomAnswer = idClickAnswer;
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomAnswer);

    let tempAnswers = [];
    for (let a = 0; a < idClickAnswer.length; a++) {
      tempAnswers.push(L4_T2_Facil[randomNumber[number]].resposta[tempRandomAnswer[a]]);
    }
    setAnswers(tempAnswers);
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

    let tempColorQ = [...colorQuestions];
    let tempColorA = [...colorAnswers];
    let tempRightPoints = rightPoints;
    
    const selectedQuestion = questions[randomNumber[selectedQuestionIndex]].status;
    const selectedAnswer = answers[randomNumber[index]].status;
    
    if (selectedAnswer === selectedQuestion) {
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

      tempRightPoints++;
      setRightPoints(tempRightPoints);
      setNewPontos(0, tempRightPoints);
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

    const rule = TrocaAtividade(0, tempGeneralRound, tempRightPoints, tempRound);

    if(rule === "Continua"){
      setTimeout(() =>{
        setColorQuestions([0, 0, 0]);
        setColorAnswer([0, 0, 0, 0, 0]);
        setCountClick(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over"){
      setNewPontos(0,0);
      setTimeout(() =>{
        setColorQuestions([0, 0, 0]);
        setColorAnswer([0, 0, 0, 0, 0]);
        setCountClick(0);
        alert('GAME OVER!!');
        setNewContainer(1);
      },1500);
    } else {
      setTimeout(() =>{
        setColorQuestions([0, 0, 0]);
        setColorAnswer([0, 0, 0, 0, 0]);
        setCountClick(0);
        alert('troca nivel');
        setNewLesson(5);
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
      }, 1000);
    }
  }, [rightQuestions, rightAnswers, round, rodadaGeral, setRound, setNewRodada, newRound]);

  useEffect(() => {
    const resetBorders = setTimeout(() => {
      let tempColorQ = [...colorQuestions];
      let tempColorA = [...colorAnswers];
      tempColorQ[selectedQuestionIndex] = 0;
      tempColorA.fill(0);
      setColorQuestions(tempColorQ);
      setColorAnswer(tempColorA);
    }, 1000);

    return () => clearTimeout(resetBorders);
  }, [colorQuestions, colorAnswers, selectedQuestionIndex]);

  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
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
                    backgroundColor: colorQuestions[index] === 0 ? "" : colorQuestions[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                    color: colorQuestions[index] === 1 || colorQuestions[index] === 2 ? defaultTheme.white : "",
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
                  backgroundColor: colorAnswers[index] === 0 ? "" : colorAnswers[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                  color: colorAnswers[index] === 1 || colorAnswers[index] === 2 ? defaultTheme.white : "",
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