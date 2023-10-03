import { useEffect, useState, useContext, useCallback } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { L2_T1_Facil } from "../../utils/Lesson2_Task";
import { LessonContext } from "../../context/lesson";
import { URL_FISKPRO } from "../../config/infos";
import { TrocaAtividade } from "../../utils/regras";

import ImgBtn from "./image/btnAudio.svg";
import ImgBtn2 from "./image/btnAudio2.svg";
import { Container, Main, ButtonRow, ButtonAudio } from "./styles";

export const Game7 = () => {
  const { rodadaGeral, timeElapsed, setNewPontos, setTimeElapsed, setRodadaGeral, setNewRodada, newStatusPlay, playAudio } = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([0, 0, 0, 0]);
  const [idClickAudio, setIdClickAudio] = useState([0, 1, 2, 3]);
  const [idClickAnswer, setIdClickAnswer] = useState([0, 1, 2, 3]);
  const [audios, setAudios] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightAudios, setRightAudios] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockAnswer, setBlockAnswer] = useState(true);
  const [blockAudio, setBlockAudio] = useState(true);
  const [selectAudio, setSelectAudio] = useState(null);
  const [countClick, setCountClick] = useState(0);

  console.log("selectAudio: ", selectAudio);

  const loadLesson = useCallback(() => {
    const totalOfQuestions = L2_T1_Facil.length;
    
    let tempRandomNumber = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempRandomNumber.push(a);
    }
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setRandomNumber(tempRandomNumber);

    let tempRandomAudio = idClickAudio;
    tempRandomAudio = tempRandomAudio.sort(() => Math.random() - 0.5);
    setIdClickAudio(tempRandomAudio);

    let tempAudios = [];
    for (let a = 0; a < idClickAudio.length; a++) {
      tempAudios.push(L2_T1_Facil[tempRandomNumber[round]].pergunta[a]);
    }
    tempAudios = tempAudios.sort(() => Math.random() - 0.5);
    setAudios(tempAudios);

    let tempRandomAnswer = idClickAnswer;
    tempRandomAnswer = tempRandomAnswer.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomAnswer);

    let tempAnswers = [];
    for (let a = 0; a < idClickAnswer.length; a++) {
      tempAnswers.push(L2_T1_Facil[tempRandomNumber[round]].resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);

    setBlockAudio(false);
  }, [setRandomNumber, idClickAudio, setIdClickAudio, round, setAudios, idClickAnswer, setIdClickAnswer, setAnswers, setBlockAudio]);

  const newRound = (number) => {
    let tempRandomAudio = idClickAudio;
    tempRandomAudio = tempRandomAudio.sort(() => Math.random() - 0.5);
    setIdClickAudio(tempRandomAudio);

    let tempAudio = [];
    for (let a = 0; a < idClickAudio.length; a++) {
      tempAudio.push(L2_T1_Facil[randomNumber[number]].pergunta[tempRandomAudio[a]]);
    }
    tempAudio = tempAudio.sort(() => Math.random() - 0.5);
    setAudios(tempAudio);

    let tempRandomNumber = idClickAnswer;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClickAnswer(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClickAnswer.length; a++) {
      tempAnswers.push(L2_T1_Facil[randomNumber[number]].resposta[tempRandomNumber[a]]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    
    setRightAnswers([]);
    setSelectAudio(null);
    setRightAudios([]);
    setBlockAudio(false);
    setBlockAnswer(true);
  }

  const handlePlayAudio = (sound) => {
    if (playAudio) return;

    let tempSound = sound.status;
    setSelectAudio(tempSound);
    setBlockAudio(true);
    setBlockAnswer(false);    

    const audio = new Audio(`${URL_FISKPRO}sounds/essentials1/lesson2/${sound.audio}.mp3`);

    audio.play();
    newStatusPlay(true);

    audio.addEventListener('ended', () => {
      newStatusPlay(false);
    });
  }

  const handleGetAnswer = (index) => {
    if (blockAnswer || playAudio) return;

    setBlockAnswer(true);

    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    let tempColor = optionColor;
    let tempRightPoints = rightPoints;

    const answer =  answers[index].status;

    if (answer === selectAudio) {
      if (clicks < 4) {
        tempColor[index] = 1;
        setOptionColor(tempColor);

        setRightAudios(state => [...state, selectAudio]);
        setRightAnswers(state => [...state, answers[index]]);
        return;
      }

      tempRightPoints += 1;
      setRightPoints(tempRightPoints);
      setNewPontos(tempRightPoints);
    } else {
      tempColor[index] = 2;
      setOptionColor(tempColor);

      let tempE = wrongPoints;
      tempE += 1;
      setWrongPoints(tempE);
    }

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const rule = TrocaAtividade(0, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() =>{
        setOptionColor([0, 0, 0, 0]);
        setCountClick(0);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0,0);
      setTimeout(() =>{
        setOptionColor([0, 0, 0, 0]);
        alert('GAME OVER!!');
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() =>{
        setOptionColor([0, 0, 0, 0]);
        alert('Proximo lesson!!');
        setNewLesson(2);
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);
  
  return (
    <Container>
      <HeaderLesson numStart="Task 1" numEnd="Task2" />
      <TitleLesson title="Make pairs." />

      <Main>
        <ButtonRow>
          {audios.map((audio, index) => {
            const disabledAud = rightAudios.includes(audio.status);
            return (
              <ButtonAudio 
                key={index}
                onClick={() => handlePlayAudio(audio)}
                disabled={disabledAud}
              >
                <img src={ImgBtn2} alt="" className="btn2" />
                <img src={ImgBtn} alt="" />
              </ButtonAudio>
            )
          })}
        </ButtonRow>

        <ButtonRow>
          {answers.map((answer, index) => {
            const disabledRes = rightAnswers.includes(answer);

            return (
              <ButtonAnswer 
                key={index}
                w="8rem"
                h="2.625rem"
                onPress={() => handleGetAnswer(index)}
                optionColor={optionColor[index]}
                disabledButton={disabledRes}
              >
                <p>{answer.label}</p>
              </ButtonAnswer>
            )
          })}
        </ButtonRow>
      </Main>
    </Container>
  )
}