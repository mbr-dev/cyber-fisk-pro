import { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { HeaderLesson } from "../HeaderLesson";

import { api } from "../../lib/api";
import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme"; 
import { Container, Main, Keyboard, Photos, Photo, Types, Type, Keys } from "./styles";

export const GameSL4 = () => {
  const { rodadaGeral, setNewRodada, conteudoSuperTask, newInfoST } = useContext(LessonContext);
  
  const [optionColor, setOptionColor] = useState([]);
  const [images, setImages] = useState([]);
  const [lettersQ, setLettersQ] = useState([]);
  const [data, setData] = useState([]);
  const [rightLetter, setRightLetter] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [divAnswer, setDivAnswer] = useState([]);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [points, setPoints] = useState(5);
  const [blockButton, setBlockButton] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

      let items = JSON.parse(res.dados[0].dados_conteudo[tempRandom[round]].conteudo);

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
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setRandomNumber, round, setLettersQ, setImages, setDivAnswer, setBlockButton]);

  const newRound = (number) => {
    const items = JSON.parse(data[randomNumber[number]].conteudo);
    setIsCompleted(false);
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

    setOptionColor([])
    setRightLetter([]);
    setBlockButton(false);
  }

  const handleClick = (index) => {
    if (blockButton || isCompleted) return;

    const clickedLetter = lettersQ[index];

    if (!answer.includes(clickedLetter)) {
      let tempE = points;
      tempE--;
      setPoints(tempE);
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
    if (points === 0) {
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

  if (isLoading) {
    return (
      <Loading />
    )
  }

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