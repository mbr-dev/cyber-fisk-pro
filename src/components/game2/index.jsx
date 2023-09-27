import { useState, useContext, useEffect, useCallback } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLesson } from "../SubTitleLesson";

import { LessonContext } from "../../context/lesson";
import { L1_T1_Medio } from "../../utils/lesson1_Task1";
import { TrocaAtividade } from "../../utils/regras";

import { Container, Main } from "./styles";

export const Game2 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, timeElapsed, setTimeElapsed} = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    const totalOfQuestion = L1_T1_Medio.length;

    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestion; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);
    setQuestion(L1_T1_Medio[tempQuestions[round]].pergunta);

    let tempIdClick = idClick;
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);

    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a ++) {
      tempAnswers.push({
        label: L1_T1_Medio[tempQuestions[round]].resposta[a].label,
        status: L1_T1_Medio[tempQuestions[round]].resposta[a].status
      });
    }
    tempAnswers = tempAnswers.sort(() => Math.random() * - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }, [setRandomNumber, setQuestion, round, setIdClick, idClick, setAnswers, setBlockButton]);

  const newRound = (number) => {
    setQuestion(L1_T1_Medio[randomNumber[number]].pergunta);

    let tempIdClick = idClick;
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);

    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a ++) {
      tempAnswers.push({
        label: L1_T1_Medio[randomNumber[number]].resposta[a].label,
        status: L1_T1_Medio[randomNumber[number]].resposta[a].status
      });
    }
    tempAnswers = tempAnswers.sort(() => Math.random() * - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if(blockButton) return;

    setBlockButton(true);

    let tempRightPoints = rightPoints;
    let tempColor = [...optionColor];
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);

      tempRightPoints += 2;
      setRightPoints(tempRightPoints);
      setNewPontos(1,tempRightPoints);
    } else {
      tempColor[index] = 2;
      setOptionColor(tempColor);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(1, tempGeneralRound, tempRightPoints, tempRound);
    if (rule === "Continua") {
      setTimeout(() =>{
        setOptionColor([0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        setOptionColor([0, 0, 0]);
        alert('GAME OVER!!');
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() =>{
        setOptionColor([0, 0, 0]);
        alert('Proximo lesson!!');
        setNewLesson(2);
      }, 1500);
    }
  }
    
  useEffect(() => { 
    loadLesson();
  }, [])
    
  return (
    <Container>
      {isLoading && 
        <Loading />
      }

      <HeaderLesson numStart="Task 1" numEnd="Task 2" />
      <TitleLesson title="Choose the correct alternative"/>
      <SubTitleLesson title={question}/>

      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer 
              key={index}
              w="9rem"
              h="3rem"
              onPress={() => handleClick(index)}
              optionColor={optionColor[index]}
            >
              <p>{answer.label}</p>
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}