import { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { HeaderLessonSL4 } from "../HeaderLessonSL4";
import { FooterBtnHome } from "../FooterBtnHome";

import { api } from "../../lib/api";
import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme"; 
import { Container, Main, Keyboard, Photos, Photo, Types, Type, Keys, Div } from "./styles";

export const GameSL4 = () => {
  const { 
    rodadaGeral, setNewRodada, setTimeElapsed, statusColor, setStatusColor, timeElapsed
  } = useContext(LessonContext);

  const navigate = useNavigate();
  
  const [optionColor, setOptionColor] = useState([]);
  const [images, setImages] = useState([]);
  const [lettersQ, setLettersQ] = useState([]);
  const [data, setData] = useState([]);
  const [rightLetter, setRightLetter] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [divAnswer, setDivAnswer] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [points, setPoints] = useState(4);
  const [rightPoints, setRightPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [countTimer, setCountTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);

      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=4&num_task=1");
      const res = response.data;
      setData(res.dados[0].dados_conteudo);
      let totalOfQuestions = res.dados[0].dados_conteudo.length;

      let tempRandom = [];
      for (let a = 0; a < totalOfQuestions; a++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);

      const items = JSON.parse(res.dados[0].dados_conteudo[tempRandom[round]].conteudo);

      let letterQuestion = items.letras;
      letterQuestion = letterQuestion.sort(() => Math.random() - 0.5);
      setLettersQ(letterQuestion);

      let tempImages = [];
      let imagesL = items.images.length;
      for (let a = 0; a < imagesL; a++) {
        tempImages.push(items.images[a]);
      }
      setImages(tempImages);

      let tempAnswer = items.resposta;
      let answerArray = tempAnswer.split("");
      setAnswer(answerArray);
      let emptyArray = Array(answerArray.length).fill("");
      setDivAnswer(emptyArray);

      setBlockButton(false);
      timePointer();
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setData, setRandomNumber, round, setLettersQ, setImages, setDivAnswer, setBlockButton, setAnswer]);

  const newRound = (number) => {
    setPoints(4);
    setCountTimer(0);
    timePointer();

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    let letterQuestion = items.letras;
    setLettersQ(letterQuestion);

    let tempImages = [];
    let imagesL = items.images.length;
    for (let a = 0; a < imagesL; a++) {
      tempImages.push(items.images[a]);
    }
    setImages(tempImages);

    let tempAnswer = items.resposta;
    let answerArray = tempAnswer.split("");
    setAnswer(answerArray);
    let emptyArray = Array(answerArray.length).fill("");
    setDivAnswer(emptyArray);

    setOptionColor([])
    setRightLetter([]);
    setIsCompleted(false);
    setBlockButton(false);
  }

  const getPoints = () => {
    let tempP = correctPoints;

    if (countTimer <= 60) {
      tempP += 5;
    } else if (countTimer >= 61 && countTimer <= 75) {
      tempP += 4;
    } else if (countTimer >= 76 && countTimer <= 90) {
      tempP += 3;
    } else if (countTimer >= 91 && countTimer <= 120) {
      tempP += 2;
    } else {
      tempP += 1;
    }

    setCorrectPoints(tempP);
  }

  const handleClick = (index) => {
    if (blockButton || isCompleted) return;

    const clickedLetter = lettersQ[index];

    let tempRound = round;
    let tempGeneralRound = rodadaGeral;
    let tempP = rightPoints;

    if (!answer.includes(clickedLetter)) {
      let tempE = points;
      tempE--;
      setPoints(tempE);

      if (tempE === 0) {
        const newStatus = [...statusColor];
        newStatus[rodadaGeral] = 2;
        setStatusColor(newStatus);

        tempRound++;
        setRound(tempRound);

        tempGeneralRound++;
        setNewRodada(tempGeneralRound);

        setTimeout(() => {
          newRound(tempRound);
        }, 1500);
      }

      setOptionColor(state => [...state, index]);
    } else if (!rightLetter.includes(clickedLetter)) {
      setRightLetter(state => [...state, clickedLetter]);
    }

    const updateDivLetters = divAnswer.map((letter, i) => {
      if (answer[i] === clickedLetter) {
        return clickedLetter
      }
      return letter;
    })
    setDivAnswer(updateDivLetters);

    if (updateDivLetters.every((letter) => letter !== "")) {
      getPoints();

      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      tempP++;
      setRightPoints(tempP);

      tempRound++;
      setRound(tempRound);

      tempGeneralRound++;
      setNewRodada(tempGeneralRound);

      setIsCompleted(true);
    }

    if (tempRound === 5) {
      if (tempP >= 2) {
        setTimeout(() => {
          navigate("/WellDone");
        }, 1500);
      } else {
        setTimeout(() => {
          navigate("/GameOver");
        }, 1500);
      }
    }
  }

  const timePointer = () => {
    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setCountTimer(state => state + 1);
    }, 1000);

    setIntervalId(newIntervalId);
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    if (isCompleted) {
      setTimeout(() => {
        newRound(round);
      }, 1500);
    }
  }, [round, newRound, isCompleted]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(state => state + 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLessonSL4 superTaskStart trophyEnd numStart="Super task" numEnd="Finished" />
      <TitleLesson title="What’s the word in common?" />

      <Main>
        <Photos>
          {images.map((image, index) => {
            return (
              <Photo key={index}>
                <img src={`${URL_FISKPRO}images/essentials1/lesson4/${image}.png`} alt="" />
              </Photo>
            )
          })}
        </Photos>

        <Div>
          <Types>
            {divAnswer.map((letter, index) => {
              return (
                <Type key={index}>{letter}</Type>
                )
            })}
          </Types>
          <Keyboard>
            {lettersQ.map((letter, index) => {
              const dontHasLetter = optionColor.includes(index);
              const hasLetter = rightLetter.includes(letter);
              return (
                <Keys 
                  key={index}
                  onClick={() => handleClick(index)}
                  style={{
                    borderColor: dontHasLetter ? defaultTheme["red-200"] : hasLetter ? defaultTheme["gray-700"] : "",
                  }}
                  disabled={hasLetter}
                  >
                  {letter}
                </Keys>
              )
            })}
          </Keyboard>
        </Div>
      </Main>

      <FooterBtnHome title="Tasks" rota="LessonSelection"/>
    </Container>
  )
}