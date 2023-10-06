import { useEffect, useState } from "react";

import { HeaderLesson } from "../HeaderLesson";

import { L3_SPT } from "../../utils/Lesson3_Task2";

import { Container, Main, DivLetter, Letters, LineSeparator, TypeLetters, Phrase } from "./styled";
import { defaultTheme } from "../../themes/defaultTheme";

export const GameSL3 = () => {
  const keyboardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const [optionColorQ, setOptionColorQ] = useState([]);
  const [round, setRound] = useState(2);
  const [question, setQuestion] = useState("");
  const [divQuestion, setDivQuestion] = useState([]);
  const [divLetter, setDivLetter] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [toHit, setToHit] = useState(0);
  const [erro, setErro] = useState(0);
  const [block, setBlock] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0); // tira esse

  console.log('array: ', divLetter);

  const loadLesson = () => {
    let tempQuestion = L3_SPT[round].pergunta.toUpperCase();
    setQuestion(tempQuestion);

    let letterQuestion = tempQuestion.split("");
    let letterIndices = letterQuestion.map((letter) => {
      return keyboardLetters.indexOf(letter);
    });
    setDivLetter(letterIndices);
    setOptionColorQ(new Array(letterIndices.length).fill(0));

    const answersLength = L3_SPT[round].resposta.length;
    let tempAnswers = [];

    for (let a = 0; a < answersLength; a ++) {
      tempAnswers.push(L3_SPT[round].resposta[a]);
    }

    setAnswers(tempAnswers);
    setBlock(false);
  }

  const newRound = (number) => {
    setQuestion(L3_SPT[number].pergunta);

    const answersLength = L3_SPT[number].resposta.length;
    let tempAnswers = [];

    for (let a = 0; a < answersLength; a ++) {
      tempAnswers.push(L3_SPT[number].resposta[a]);
    }

    setAnswers(tempAnswers);
    setBlock(false);
  }

  // const handleClickQuestion = (index) => {
  //   let arr = optionColorQ;

  //   if (currentLetterIndex < divLetter.length) {
  //     const currentLetter = divLetter[currentLetterIndex];

  //     if (index === currentLetter) {
  //       arr[currentLetterIndex] = 1; // aqui
  //       const newDivLetter = [...divLetter];
  //       newDivLetter[currentLetterIndex] = keyboardLetters[index];
  //       setDivLetter(newDivLetter);
  //       setCurrentLetterIndex(state => state + 1);
  //     } else {
  //       arr[currentLetterIndex] = 2; // aqi tbm
  //     }
  //   }
  // }

  const handleClickQuestion = (index) => {
    if (divLetter.length > 0) {
      const letterToReplace = keyboardLetters[index];

      const newDivLetter = divLetter.map((letter, i) =>
        letter === index ? letterToReplace : divLetter[i]
      );

      setDivLetter(newDivLetter);
    }
  }

  useEffect(() => {
    loadLesson();
  } , []);

  // useEffect(() => {
  //   if (currentLetterIndex >= 0 && divLetter[currentLetterIndex] === -1) {
  //     setCurrentLetterIndex(state => state + 1);
  //   }
  // }, [currentLetterIndex]);
  
  return (
    <Container>
      <HeaderLesson numStart="Super Task" numEnd="Finish" superTaskStart trophyEnd />

      <Main>
        <Phrase>
          <h2>Solve the code to answer the question.</h2>

          <Letters>
            {keyboardLetters.map((letter, index) => {
              return (
                <button key={index} onClick={() => handleClickQuestion(index)}>
                  <p>{letter.toUpperCase()}</p>
                  <LineSeparator />
                  <span>{index}</span>
                </button>
              )
            })}
          </Letters>

          <TypeLetters>
            {divLetter.map((letter, index) => {
              const spaceL = letter === -1;
              const displayShow = spaceL ? '' : letter;
              return (
                <DivLetter 
                  key={index}
                  style={{
                   /*  borderColor: 
                      spaceL ? 'transparent' :
                      optionColorQ[index] === 1 ? defaultTheme["gray-600"] :
                      optionColorQ[index] === 2 ? defaultTheme["red-200"] :
                      currentLetterIndex === index ? defaultTheme["gray-600"] : '', */
                    borderColor: spaceL ? "transparent" : '',
                    backgroundColor: spaceL ? 'transparent' : '',
                    width: spaceL ? '10px' : '',
                  }}
                >
                  {displayShow}
                </DivLetter>
              )
            })}
            <DivLetter>?</DivLetter>
          </TypeLetters>
        </Phrase>

        {/* <Answer></Answer> */}
      </Main>
    </Container>
  )
}