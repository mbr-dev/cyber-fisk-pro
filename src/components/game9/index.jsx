import { useState, useEffect, useContext, useCallback } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { L3_T2_Medio } from "../../utils/Lesson3_Task2";
import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Button, Container, Main } from "./styles";

export const Game9 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio } = useContext(LessonContext);

  const [colorAnswers, setColorAnswers] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    const totalOfQuestions = L3_T2_Medio.length;

    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    setSound(L3_T2_Medio[tempQuestions[round]].pergunta);

    let tempAnswers = [];
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    setAnswers(tempAnswers);

    let tempRightAnswers = [];
    for (let a = 0; a < 3; a ++) {
      const answer = L3_T2_Medio[tempQuestions[round]].resposta[tempRandomNumber[a]];

      tempAnswers.push(answer.label);

      if (answer.status === 1) {
        tempRightAnswers.push(answer.label)
      }
    }
    setRightAnswers(tempRightAnswers);

    setBlockButton(false);
  }, [setRandomNumber, setSound, setIdClick, round, setRightAnswers, setAnswers, setBlockButton]);

  const newRound = (number) => {
    setSound(L3_T2_Medio[randomNumber[number]].pergunta);

    let tempAnswers = [];
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    setAnswers(tempAnswers);
    
    let tempRightAnswer = [];
    for (let a = 0; a < 3; a++) {
      const answer = L3_T2_Medio[randomNumber[number]].resposta[tempRandomNumber[a]];

      tempAnswers.push(answer.label);

      if (answer.status === 1) {
        tempRightAnswer.push(answer.label)
      }
    }
    setRightAnswers(tempRightAnswer);

    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton) return;
    if (playAudio) return;

    setBlockButton(true);

    let tempPoint = correctPoints;
    let tempColor = colorAnswers;
    let answerSelected = answers[index];

    if (rightAnswers.includes(answerSelected)) {
      tempPoint += 2;
      setCorrectPoints(tempPoint);
      setNewPontos(1, tempPoint);

      tempColor[index] = 1;
      setColorAnswers(tempColor);
    } else {
      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);

      tempColor[index] = 2;
      setColorAnswers(tempColor);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(1, tempGeneralRound, tempPoint, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);

      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() => {
        tempColor[index] = 0;
        setColorAnswers(tempColor);
        setNewLesson(2);
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  } , []);

  useEffect(() => {
    playAudio ? setBlockButton(true) : setBlockButton(false);
  }, [playAudio, setBlockButton])

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
                backgroundColor: colorAnswers[index] === 0 ? "" : colorAnswers[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                color: colorAnswers[index] === 1 || colorAnswers[index] === 2 ? "white" : "" 
              }}
              disabled={blockButton}
            >
              <p>{answer}</p>
            </Button>
          )
        })}
      </Main>
    </Container>
  )
}