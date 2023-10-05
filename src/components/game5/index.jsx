import { useState, useContext, useEffect, useCallback } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade } from "../../utils/regras";
import { L1_T2_Medio } from "../../utils/lesson1_Task";
import { URL_FISKPRO } from "../../config/infos";

import { Container, Main } from "./styles";

export const Game5 = () => {
  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio} = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    const totalOfSounds = L1_T2_Medio.length;

    let tempSounds = [];
    for (let a = 0; a < totalOfSounds; a++) {
      tempSounds.push(a);
    }
    tempSounds = tempSounds.sort(() => Math.random() - 0.5);
    setRandomNumber(tempSounds);
    setSound(L1_T2_Medio[tempSounds[round]].pergunta);

    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(L1_T2_Medio[tempSounds[round]].resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }, [setRandomNumber, setSound, round, setIdClick, setAnswers, setBlockButton]);

  const newRound = (number) => {
    setSound(L1_T2_Medio[randomNumber[number]].pergunta);

    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(L1_T2_Medio[randomNumber[number]].resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton || playAudio) return;

    setBlockButton(true);

    let tempRightPoints = rightPoints;
    let tempColor = optionColor;
    const selectedAnswer = answers[index].status;

    if (selectedAnswer === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);

      tempRightPoints += 2;
      setNewPontos(1, tempRightPoints);
      setRightPoints(tempRightPoints);
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
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        alert("GAME OVER!!");
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        alert("Troca de nível!!");
        setNewLesson(6);
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    playAudio ? setBlockButton(true) : setBlockButton(false);
  }, [playAudio, setBlockButton]);

  return (
    <Container>
      {isLoading &&
        <Loading />
      }

      <HeaderLesson numStart="Task 2" numEnd="Super task" superTaskEnd />
      <TitleLesson title='Choose the correct alternative' />
      <SubTitleLessonAudio audio={`${URL_FISKPRO}sounds/essentials1/lesson1/${sound}.mp3`} />
      
      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer
              key={index}
              w="13rem"
              h="3.5rem"
              onPress={() => handleClick(index)}
              optionColor={optionColor[index]}
              disabledButton={blockButton}
            >
              {answer.label}
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}