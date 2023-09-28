import { useState, useContext, useEffect, useCallback } from "react";

import { TitleLesson } from "../titleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLessonAudioImg } from "../SubTitleLessonAudioImg";

import { LessonContext } from "../../context/lesson";
import { L1_T2_Dificil } from "../../utils/lesson1_Task2";
import { Score, PontosRank, TrocaAtividade } from "../../utils/regras";
import { URL_HMLG, URL_FISKPRO } from "../../config/infos";

import { Container, Main } from "./styles";

export const Game6 = () => {
  const {playAudio, setNewContainer, setNewPontos, rodadaGeral, setNewRodada, pontosD, pontosF, pontosM} = useContext(LessonContext);
  
  const [optionColor, setOptionColor] = useState([0, 0, 0, 0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2, 3, 4, 5]);
  const [sound, setSound] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    const totalOfSounds = L1_T2_Dificil.length;

    let tempSounds = [];
    for (let a = 0; a < totalOfSounds; a++) {
      tempSounds.push(a);
    }
    tempSounds = tempSounds.sort(() => Math.random() - 0.5);
    setRandomNumber(tempSounds);
    setSound(L1_T2_Dificil[tempSounds[round]].pergunta);
    
    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(L1_T2_Dificil[tempSounds[round]].resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }, []);

  const newRound = (number) => {
    setSound(L1_T2_Dificil[randomNumber[number]].pergunta);

    let tempRandomNumber = idClick;
    tempRandomNumber = tempRandomNumber.sort(() => Math.random() - 0.5);
    setIdClick(tempRandomNumber);
    
    let tempAnswers = [];
    for (let a = 0; a < idClick.length; a++) {
      tempAnswers.push(L1_T2_Dificil[randomNumber[number]].resposta[a]);
    }
    tempAnswers = tempAnswers.sort(() => Math.random() - 0.5);
    setAnswers(tempAnswers);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton || playAudio) return;

    setBlockButton(false);
    
    let clicks = countClick;
    clicks++;
    setCountClick(clicks);

    let tempColor = optionColor;

    let tempRightPoints = rightPoints;
    let tempRound = round;
    let tempGeneralRound = rodadaGeral;

    const answer = answers[index].status;

    if (answer === 1) {
      if (clicks < 3) {
        tempColor[index] = 1;
        setOptionColor(tempColor);
        return;
      }

      tempRightPoints +=3;
      setRightPoints(tempRightPoints);
      setNewPontos(2, tempRightPoints);
    } else {
      tempColor[index] = 2;
      setOptionColor(tempColor);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    tempRound++;
    setRound(tempRound);

    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    setBlockButton(true);
    clicks = 0;
    setCountClick(clicks);
    
    const rule = TrocaAtividade(2, tempGeneralRound, tempRightPoints, tempRound);
    if (rule === "Continua") {
      setTimeout(() => {
        setOptionColor([0, 0, 0, 0, 0, 0]);
        newRound(tempRound);
      }, 1000);
    } else if (rule === "Score") {
      setTimeout(() => {
        const scoreFinal = Score(pontosF, pontosM, pontosD);
        let valorRank = 0;
        if (scoreFinal >= 70) {
          if (localStorage.getItem('cyber_pro_frequencia_task2')) {
            let frequencia = parseInt(localStorage.getItem('cyber_pro_frequencia_task2'));
            let oldRank = parseInt(localStorage.getItem('cyber_pro_rank'));
            frequencia++;
            if (frequencia === 4) {
              alert(`Parabéns voce ganhou: 10 Fisk Dollars`);
            }
            localStorage.setItem('cyber_pro_frequencia_task2', frequencia);
            const rank = PontosRank(frequencia, oldRank);
            valorRank = rank;
            localStorage.setItem('cyber_pro_rank', rank);
          } else {
            localStorage.setItem('cyber_pro_supertask', '1');
            localStorage.setItem('cyber_pro_msg_supertask', '1');
            localStorage.setItem('cyber_pro_frequencia_task2', 1);
            if (localStorage.getItem('cyber_pro_rank')) {
              let oldRank = parseInt(localStorage.getItem('cyber_pro_rank'));
              const rank = PontosRank(1, oldRank);
              valorRank = rank;
            } else {
              const rank = PontosRank(1, 0);
              valorRank = rank;
            }
            localStorage.setItem('cyber_pro_rank', valorRank);
          }
        }
        alert(`SCORE: ${scoreFinal}%`);
        alert(`PONTOS PARA O RANKING: ${valorRank}`);
        setNewContainer(1);
      }, 1000);
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
      
      <HeaderLesson numStart="Task 2" numEnd="Super Task" superTaskEnd />
      <TitleLesson title="Choose the correct alternative" />
      <SubTitleLessonAudioImg audio={`${URL_FISKPRO}sounds/essentials1/lesson1/${sound}.mp3`} />

      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer
              key={index}
              w="7rem"
              h="3.25rem"
              onPress={() => handleClick(index)} 
              optionColor={optionColor[index]}
              disabledButton={blockButton}
            >
              <p>{answer.label}</p>
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}