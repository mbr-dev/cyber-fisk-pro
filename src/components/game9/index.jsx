import { useState, useEffect, useContext } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { L3_T2_Medio } from "../../utils/Lesson3_Task2";
import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Button, Container, Main } from "./styles";

export const Game9 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio, timeElapsed, setTimeElapsed} = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [round, setRound] = useState(0);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [toHit, setToHit] = useState(0);
  const [erro, setErro] = useState(0);
  const [block, setBlock] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [rightAnswer, setRightAnswer] = useState([]);
  

  const loadLesson = () => {
    const totalOfQuestions = L3_T2_Medio.length;
    let tempQuestions = [];

    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }

    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);

    setRandomNumber(tempQuestions);
    setSound(L3_T2_Medio[tempQuestions[round]].pergunta);

    let tempRandomAnswers = [];
    let tempRandomNumber = idClick;

    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);

    let tempRightAnswer = [];
    
    for (let a = 0; a < 3; a ++) {
      const answer = L3_T2_Medio[tempQuestions[round]].resposta[tempRandomNumber[a]];

      tempRandomAnswers.push(answer.label);

      if (answer.status === 1) {
        tempRightAnswer.push(answer.label)
      }
    }

    setRightAnswer(tempRightAnswer);
    setAnswers(tempRandomAnswers);
    setBlock(false);
  }

  const newRound = (number) => {
    setSound(L3_T2_Medio[randomNumber[number]].pergunta);

    let tempAnswers = [];
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempRightAnswer = [];

    for (let a = 0; a < 3; a++) {
      const answer = L3_T2_Medio[randomNumber[number]].resposta[tempRandomNumber[a]];

      tempAnswers.push(answer.label);

      if (answer.status === 1) {
        tempRightAnswer.push(answer.label)
      }
    }

    setRightAnswer(tempRightAnswer);
    setAnswers(tempAnswers);
    setBlock(false);
  }

  const handleClick = (index) => {
    if (block) return;
    if (playAudio) return;

    setBlock(true);

    let tempHit = toHit;
    let arr = optionColor
    let answerSelected = answers[index];

    if (rightAnswer.includes(answerSelected)) {
      tempHit += 2;
      arr[index] = 1;
      setOptionColor(arr);
      setNewPontos(1, tempHit);
      setToHit(tempHit);
    } else {
      arr[index] = 2;
      setOptionColor(arr);
      let tempE = erro;
      tempE++;
      setErro(tempE);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    let rule = TrocaAtividade(1, tempGeneralRound, tempHit, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        arr[index] = 0;
        setOptionColor(arr);
        newRound(tempRound);
      }, 1000);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);

      setTimeout(() => {
        arr[index] = 0;
        setOptionColor(arr);
        setNewContainer(1);
      }, 1000);
    } else {
      setTimeout(() => {
        arr[index] = 0;
        setOptionColor(arr);
        setNewLesson(2);
      }, 1000);
    }
  }

  useEffect(() => {
    loadLesson();
  } , [])

  return (
    <Container>
      <HeaderLesson numStart="Task 2" numEnd="Super Task" />
      <TitleLesson title="Mark all the correct answer for each question you hear." />
      <SubTitleLessonAudio size={40} audio={sound} />

      <Main>
        {answers.map((answer, index) => {
          return (
            <Button 
              key={index}
              onClick={() => handleClick(index)}
              style={{
                borderColor: optionColor[index] === 0 ? "transparent" : optionColor[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"]
              }}
            >
              <p>{answer}</p>
            </Button>
          )
        })}
      </Main>
    </Container>
  )
}