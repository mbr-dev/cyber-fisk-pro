import { useState, useContext, useEffect, useCallback } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";
import { ButtonAnswer } from "../ButtonAnswer";
import { SubTitleLesson } from "../SubTitleLesson";

import { LessonContext } from "../../context/lesson";
import { TrocaAtividade } from "../../utils/regras";
import { URL_FISKPRO } from "../../config/infos";
import { L1_T1_Facil } from "../../utils/lesson1_Task1";
import { api } from "../../lib/api";

import { Container, Main } from "./styles";

export const Game1 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada } = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([0, 0, 0]);
  const [idClick, setIdClick] = useState([0, 1, 2]);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);
  const [round, setRound] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);
      
      const response  = await api.get("/L1_T1_Facil");
      setData(response.data);
      
      const dataLength = data.length;
      
      let tempRandom = [];
      for (let a = 0; a < dataLength; a++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);
      
      setQuestion(data[tempRandom[round]].pergunta);
      
      let tempIdClick = idClick;
      tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
      setIdClick(tempIdClick);
      
      let tempImages = [];
      for (let a = 0; a < idClick.length; a++) {
        tempImages.push(data[tempRandom[round]].images[a])
      }
      tempImages = tempImages.sort(() => Math.random() - 0.5);
      setAnswers(tempImages);
      setBlockButton(false);
      setIsLoading(false);
    } catch(error) {
      console.log("error tente novamente mais tarde.");
    }
  }, [setIsLoading, data, setData, round, setAnswers, setBlockButton, setIdClick, idClick, setQuestion, setRandomNumber]);

  const newRound = (number) => {
    setQuestion(data[randomNumber[number]].pergunta);

    let tempIdClick = idClick;
    tempIdClick = tempIdClick.sort(() => Math.random() - 0.5);
    setIdClick(tempIdClick);
    
    let tempImages = [];
    for (let a = 0; a < idClick.length; a++) {
      tempImages.push(data[randomNumber[number]].images[a]);
    }
    tempImages = tempImages.sort(() => Math.random() - 0.5);
    setAnswers(tempImages);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton) return;

    setBlockButton(true);
    let tempRightPoints = rightPoints;
    let tempColor = [...optionColor];
    const selectedAnswer = answers[index];

    if (selectedAnswer.status === 1) {
      tempColor[index] = 1;
      setOptionColor(tempColor);
      
      tempRightPoints++;
      setRightPoints(tempRightPoints);
      setNewPontos(0, (tempRightPoints));
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

    const rule = TrocaAtividade(0, tempGeneralRound, tempRightPoints, tempRound);

    if (rule === "Continua") {
      setTimeout(() => {
        setOptionColor([0, 0, 0]);
        newRound(tempRound);
      }, 1500);
    } else if (rule === "Game over") {
      setNewPontos(0, 0);
      setTimeout(() => {
        alert('GAME OVER!!');
        setOptionColor([0, 0, 0]);
        setNewContainer(1);
      }, 1500);
    } else {
      setTimeout(() => {
        alert('MUDA DE RODADA!!');
        setOptionColor([0, 0, 0]);
        setNewLesson(1);
      }, 1500);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLesson numStart={`Task 1`} numEnd={`Task 2`} />
      <TitleLesson title="Choose the correct alternative" />
      <SubTitleLesson title={question} />

      <Main>
        {answers.map((answer, index) => {
          return (
            <ButtonAnswer 
              key={index}
              w="6rem"
              h="7rem"
              onPress={() => handleClick(index)}
              optionColor={optionColor[index]}
              disabledButton={blockButton}
            >
              <img src={`${URL_FISKPRO}/images/essentials1/lesson1/${answer.img}.png`} alt="" />
            </ButtonAnswer>
          )
        })}
      </Main>
    </Container>
  )
}