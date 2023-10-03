import { useState, useCallback, useEffect, useContext } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { TitleLesson } from "../TitleLesson";

import { URL_FISKPRO } from "../../config/infos";
import { L4_SL4 } from "../../utils/lesson4_Task2";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme"; 
import { Container, Main, Keyboard, Photos, Photo, Types, Type, Keys } from "./styles";

export const GameSL4 = () => {
  const { rodadaGeral, setNewRodada } = useContext(LessonContext);
  
  const [optionColor, setOptionColor] = useState([]);
  const [images, setImages] = useState([]);
  const [lettersQ, setLettersQ] = useState([]);
  const [rightLetter, setRightLetter] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [divAnswer, setDivAnswer] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [points, setPoints] = useState(0);
  const [blockButton, setBlockButton] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const loadLesson = useCallback(() => {
    let totalOfQuestions = L4_SL4.length;

    let tempQuestions = [];
    for (let a = 0; a < totalOfQuestions; a++) {
      tempQuestions.push(a);
    }
    tempQuestions = tempQuestions.sort(() => Math.random() - 0.5);
    setRandomNumber(tempQuestions);

    let letterQuestion = L4_SL4[tempQuestions[round]].letras;
    letterQuestion = letterQuestion.sort(() => Math.random() - 0.5);
    setLettersQ(letterQuestion);

    let tempImages = [];
    let imagesL = L4_SL4[round].images.length;
    for (let a = 0; a < imagesL; a++) {
      tempImages.push(L4_SL4[tempQuestions[round]].images[a]);
    }
    setImages(tempImages);

    let tempAnswer = L4_SL4[tempQuestions[round]].resposta;
    let answerArray = tempAnswer.split("");
    setAnswer(answerArray);
    let emptyArray = Array(answerArray.length).fill("");
    setDivAnswer(emptyArray);

    setBlockButton(false);
  }, [setRandomNumber, round, setLettersQ, setImages, setDivAnswer, setBlockButton]);

  const newRound = (number) => {
    setIsCompleted(false);
    let letterQuestion = L4_SL4[randomNumber[number]].letras;
    letterQuestion = letterQuestion.sort(() => Math.random() - 0.5);
    setLettersQ(letterQuestion);

    let tempImages = [];
    let imagesL = L4_SL4[randomNumber[number]].images.length;
    for (let a = 0; a < imagesL; a++) {
      tempImages.push(L4_SL4[randomNumber[number]].images[a]);
    }
    setImages(tempImages);

    let tempAnswer = L4_SL4[randomNumber[number]].resposta;
    let answerArray = tempAnswer.split("");
    setAnswer(answerArray);
    let emptyArray = Array(answerArray.length).fill("");
    setDivAnswer(emptyArray);

    setOptionColor([])
    setRightLetter([]);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton || isCompleted) return;

    const clickedLetter = lettersQ[index];

    if (!answer.includes(clickedLetter)) {
      let tempE = points;
      tempE++;
      setPoints(tempE);
      console.log("tempE:", tempE);
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
      let tempRound = round;
      tempRound++;
      setRound(tempRound);

      let tempGeneralRound = rodadaGeral;
      tempGeneralRound++;
      setNewRodada(tempGeneralRound);
      setIsCompleted(true);
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    if (points >= 5) {
      alert("game over");
    }
  }, [points])

  useEffect(() => {
    if (isCompleted) {
      setTimeout(() => {
        newRound(round)
      }, 2000);
    }
  }, [round, newRound, isCompleted]);

  return (
    <Container>
      <HeaderLesson numStart="Super task" numEnd="Finish" superTaskStart trophyEnd />
      <TitleLesson title="What’s the word in common?" />

      <Main>
        <Photos>
          {images.map((image, index) => {
            return (
              <Photo key={index}>
                <img src={`${URL_FISKPRO}images/essentials1/lesson4//${image}.png`} alt="" />
              </Photo>
            )
          })}
        </Photos>

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
                  borderColor: dontHasLetter ? defaultTheme["red-200"] : hasLetter ? "transparent" : "",
                  backgroundColor: hasLetter ? defaultTheme["gray-400"] : "",
                  color: hasLetter ? defaultTheme["gray-400"] : "",
                }}
                disabled={hasLetter}
              >
                {letter}
              </Keys>
            )
          })}
        </Keyboard>
      </Main>
    </Container>
  )
}