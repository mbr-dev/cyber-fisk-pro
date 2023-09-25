import { useEffect, useState, useContext, useCallback } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";

import { L2_T1_Facil } from "../../utils/Lesson2_Task1";
import { LessonContext } from "../../context/lesson";

import { Container, Main, ButtonRow, ButtonAnswer, ButtonAudio } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Game7 = () => {
  const { rodadaGeral, timeElapsed, setTimeElapsed, setRodadaGeral, setNewRodada } = useContext(LessonContext);

  const [colorAnswers, setColorAnswers] = useState([0, 0, 0, 0]);
  const [idClickAudio, setIdClickAudio] = useState([0, 1, 2, 3]);
  const [idClickAnswer, setIdClickAnswer] = useState([0, 1, 2, 3]);
  const [audios, setAudios] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightAudios, setRightAudios] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [blockAnswer, setBlockAnswer] = useState(true);
  const [blockAudio, setBlockAudio] = useState(true);
  const [selectAudioIndex, setSelectAudioIndex] = useState(null);

  const loadLesson = useCallback(() => {
    const totalOfQuestions = L2_T1_Facil.length;
    
    let tempRandomNumber = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempRandomNumber.push(a);
    }
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandomNumber);

    let tempAudio = [];
    let tempRandomAudio = idClickAudio;
    tempRandomAudio = tempRandomAudio.sort(() => Math.random() - 0.5);
    setIdClickAudio(tempRandomAudio);
    for (let a = 0; a < idClickAudio.length; a++) {
      tempAudio.push(L2_T1_Facil[tempRandomNumber[round]].pergunta[tempRandomAudio[a]]);
    }
    setAudios(tempAudio);

    let tempAnswer = [];
    let tempRandomAnswer = idClickAnswer;
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomAnswer);
    for (let a = 0; a < idClickAnswer.length; a++) {
      tempAnswer.push(L2_T1_Facil[tempRandomNumber[round]].resposta[tempRandomAnswer[a]]);
    }
    setAnswers(tempAnswer);

    setBlockAudio(false);
  }, [setRandomNumber, idClickAudio, setIdClickAudio, round, setAudios, idClickAnswer, setIdClickAnswer, setAnswers, setBlockAudio]);

  const newRound = (number) => {
    setRightAudios([]);
    setRightAnswers([]);

    let tempAudio = [];
    let tempRandomAudio = idClickAudio;
    tempRandomAudio = tempRandomAudio.sort(() => Math.random() - 0.5);
    setIdClickAudio(tempRandomAudio);
    for (let a = 0; a < idClickAudio.length; a++) {
      tempAudio.push(L2_T1_Facil[randomNumber[number]].pergunta[tempRandomAudio[a]]);
    }
    setAudios(tempAudio);

    let tempAnswer = [];
    let tempRandomNumber = idClickAnswer;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomNumber);
    for (let a = 0; a < idClickAnswer.length; a++) {
      tempAnswer.push(L2_T1_Facil[randomNumber[number]].resposta[tempRandomNumber[a]]);
    }
    setAnswers(tempAnswer);
    
    setBlockAudio(false);
    setBlockAnswer(true);
  }

  const handleGetAudio = (index) => {
    if (blockAudio) {
      setSelectAudioIndex(null);
      setBlockAudio(false);
    } else {
      let tempId = index;
      setSelectAudioIndex(tempId);
      setBlockAudio(true);
      setBlockAnswer(false);
    }
  }

  const handleGetAnswer = (index) => {
    if (blockAnswer) return;
    
    if (rightAudios.includes(audios[selectAudioIndex])) {
      return;
    }

    let tempColor = colorAnswers;

    if (answers[index] === audios[selectAudioIndex]) {
      tempColor[index] = 1;
      setColorAnswers(tempColor);

      setRightAudios(state => [...state, audios[selectAudioIndex]]);
      setRightAnswers(state => [...state, answers[index]]);
    } else {
      tempColor[index] = 2;
      setColorAnswers(tempColor);
    }

    setBlockAudio(false);
    setBlockAnswer(true);
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    if (rightAudios.length >= 4 && rightAnswers.length >= 4) {
      let tempRound = round;
      tempRound++;
      let tempGeneralRound = rodadaGeral;
      tempGeneralRound++;
    
      setTimeout(() => {
        setRound(tempRound);
        setNewRodada(tempGeneralRound);
        newRound(tempRound);
      }, 1000)
    }

  }, [rightAudios, rightAnswers, round, rodadaGeral, setRound, setNewRodada, newRound]);

  useEffect(() => {
    const resetColor = setTimeout(() => {
      let tempColor = [...colorAnswers];
      tempColor[selectAudioIndex] = 0;
      tempColor.fill(0);
      setColorAnswers(tempColor);
    }, 1000);

    return () => clearTimeout(resetColor);
  }, [colorAnswers, colorAnswers, selectAudioIndex]);
  
  return (
    <Container>
      <HeaderLesson numStart="Task 1" numEnd="Task2" />
      <TitleLesson title="Make pairs." />

      <Main>
        <ButtonRow>
          {audios.map((audio, index) => {
            const disabledAud = rightAudios.includes(audio);
            return (
              <ButtonAudio 
                key={index}
                onClick={() => handleGetAudio(index)}
                style={{
                  opacity: (blockAudio && selectAudioIndex === index) || disabledAud ? 0.5 : 1
                }}
                disabled={disabledAud}
              >
                {/* <Volume2 size={24} strokeWidth={2} />
                <img src={SomImg} alt="" />  */}
                <span>{audio}</span>
              </ButtonAudio>
            )
          })}
        </ButtonRow>

        <ButtonRow>
          {answers.map((resposta, index) => {
            const disabledRes = rightAnswers.includes(resposta);

            return (
              <ButtonAnswer 
                key={index}
                onClick={() => handleGetAnswer(index)}
                style={{ 
                  backgroundColor: colorAnswers[index] === 0 ? "" : colorAnswers[index] === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                  color: colorAnswers[index] === 1 || colorAnswers[index] === 2 ? defaultTheme.white : ""
                }}
                disabled={disabledRes}
              >
                <p>{resposta}</p>
              </ButtonAnswer>
            )
          })}
        </ButtonRow>
      </Main>
    </Container>
  )
}