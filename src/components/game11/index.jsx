import { useState, useEffect, useContext } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";

import { L4_T2_Facil } from "../../utils/lesson4_Task2";
import { LessonContext } from "../../context/lesson";

import { Container, Main, Answers, Questions, Button } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game11 = () => {
  const { rodadaGeral, setRodadaGeral, setNewRodada } = useContext(LessonContext);

  const [optionColorQ, setOptionColorQ] = useState([0, 0, 0]);
  const [optionColorA, setOptionColorA] = useState([0, 0, 0, 0, 0]);
  const [idClickQuestion, setIdClickQuestion] = useState([0, 1, 2]);
  const [idClickAnswer, setIdClickAnswer] = useState([0, 1, 2, 3, 4]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [blockAnswer, setBlockAnswer] = useState(true);
  const [blockQuestion, setBlockQuestion] = useState(true);
  const [selectQuestionIndex, setSelectQuestionIndex] = useState(null);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [rightQ, setRightQ] = useState([]);
  const [rightA, setRightA] = useState([]);

  console.log("rightQ: ", rightQ);
  console.log("rightA: ", rightA);

 
  const loadLesson = () => {
    const totalOfQuestions = L4_T2_Facil.length;
    let tempQuestions = [];

    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }

    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);

    let tempQ = [];
    let tempRandomQ = idClickQuestion;
    tempRandomQ = tempRandomQ.sort(() => Math.random() - 0.5);
    setIdClickQuestion(tempRandomQ);
    for (let a = 0; a < idClickQuestion.length; a++) {
      tempQ.push(L4_T2_Facil[tempQuestions[round]].pergunta[tempRandomQ[a]].label);
    }

    let tempA = [];
    let temRandomA = idClickAnswer;
    temRandomA = temRandomA.sort(() => Math.random() - 0.5);
    setIdClickAnswer(temRandomA);
    for (let a = 0; a < idClickAnswer.length; a++) {
      tempA.push(L4_T2_Facil[tempQuestions[round]].resposta[temRandomA[a]].label);
    }

    let tempQuestionsAndAnswers = [];

    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestionsAndAnswers.push({
        question: L4_T2_Facil[a].pergunta.label,
        answer: L4_T2_Facil[a].resposta.label
      });
    }
    
    setQuestions(tempQ);
    setAnswers(tempA);
    setBlockQuestion(false);
    setBlockAnswer(false);
  }

  const newRound = (number) => {
    let tempAnswer = [];
    let tempRandomAnswer = idClickAnswer;
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomAnswer);
    for (let a = 0; a < idClickAnswer.length; a++) {
      tempAnswer.push(L4_T2_Facil[randomNumber[number]].pergunta[tempRandomAnswer[a]].label);
    }

    let tempQuestion = [];
    let tempRandomQuestion = idClickQuestion;
    tempRandomQuestion = tempRandomQuestion.sort(() => Math.random() - 0.5);
    setIdClickQuestion(tempRandomQuestion);
    for (let a = 0; a < idClickQuestion.length; a++) {
      tempQuestion.push(L4_T2_Facil[randomNumber[number]].resposta[tempRandomQuestion[a]].label);
    }

    setQuestions(tempQuestion);
    setAnswers(tempAnswer);
    setBlockQuestion(false);
    setBlockAnswer(false);
  }

  const handleGetQuestion = (id) => {
    if (blockQuestion) {
      setSelectQuestionIndex(null);
      setBlockQuestion(false)
    } else {
      let tempId = id;
      setSelectQuestionIndex(tempId);
      setBlockQuestion(true);
    }
  }

  const handleGetAnswer = (id) => {
    if (blockAnswer) return;

    let arr = optionColorQ;
    let arr2 = optionColorA;
    let tempRound = round;
    let tempGeneralRound = rodadaGeral;
    
    const selectedQuestion = L4_T2_Facil[randomNumber[round]].pergunta[idClickQuestion[selectQuestionIndex]];
    const selectedAnswer = L4_T2_Facil[randomNumber[round]].resposta[idClickAnswer[id]];
    
    if (selectedQuestion.answer === selectedAnswer.answer) {
      arr[selectQuestionIndex] = 1;
      arr2[id] = 1;
      setOptionColorQ(arr);
      setOptionColorA(arr2);
      setRightQ(state => [...state, selectQuestionIndex]);
      setRightA(state => [...state, id]);
    } else {
      arr[selectQuestionIndex] = 2;
      arr2[id] = 2;
      setOptionColorQ(arr);
      setOptionColorA(arr2);
    }

    setBlockAnswer(false);
    setBlockQuestion(false);

    setTimeout(() => {
      arr[selectQuestionIndex] = 0;
      arr2[id] = 0;
      setOptionColorQ(arr);
      setOptionColorA(arr2);
      console.log("Timeout executed.");
    }, 500);
  }

  useEffect(() => {
    loadLesson();
  }, [])

  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
      <TitleLesson title="Match the question to their answers." />

      <Main>
        <Questions>
         {questions.map((question, index) => {
           const disabledQ = rightQ.includes(index);
            return (
              <Button 
                key={index}
                onClick={() => handleGetQuestion(index)}
                style={{
                  borderColor: optionColorQ[index] === 0 ? "transparent" : optionColorQ[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                }}
                disabled={disabledQ}
              >
                <p>{question}</p>
              </Button>
            )
          })}
        </Questions>

        <Answers>
          {answers.map((answer, index) => {
            const disabledA = rightA.includes(index);
            return (
              <Button 
                key={index}
                onClick={() => handleGetAnswer(index)}
                style={{
                  borderColor: optionColorA[index] === 0 ? "transparent" : optionColorA[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                }}
                disabled={disabledA}
              >
                <p>{answer}</p>
              </Button>
            )
          })}
        </Answers>
      </Main>
    </Container>
  )
}