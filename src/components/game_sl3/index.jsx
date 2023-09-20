import { useEffect, useState } from "react";

import { HeaderLesson } from "../HeaderLesson";

import { L3_SPT } from "../../utils/Lesson3_Task2";

import { Container, Main, DivLetter, Letters, LineSeparator, TypeLetters, Phrase, DivWord, Answer, Button, Input, TypeLetters2, DivLetter2, ButtonClean } from "./styled";
import { defaultTheme } from "../../themes/defaultTheme";

export const GameSL3 = () => {
  const keyboardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const letterToNumberMap = {
    "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 10,
    "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, "R": 18, "S": 19, "T": 20,
    "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26,
  };

  const [optionColor, setOptionColor] = useState(0);
  const [round, setRound] = useState(0);
  const [question, setQuestion] = useState("");
  const [divLetter, setDivLetter] = useState([]);
  const [divLetterN, setDivLetterN] = useState([]);
  const [answersQ, setAnswersQ] = useState([]);
  const [answersA, setAnswersA] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [toHit, setToHit] = useState(0);
  const [erro, setErro] = useState(0);
  const [block, setBlock] = useState(true);
  const [changed, setChanged] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  console.log("selectedLetter: ", selectedLetter)
  console.log("currentWordIndex: ", currentWordIndex)
  console.log("currentLetterIndex: ", currentLetterIndex)
  console.log("selectedLetter: ", selectedLetter)

  const loadLesson = () => {
    let tempQuestion = L3_SPT[round].pergunta.toUpperCase();
    setQuestion(tempQuestion);

    let letterQuestion = tempQuestion.split(" ");
    const letter = letterQuestion.map(word => word.split(""));
    setDivLetter(letter)
    const mappedLetters = letter.map(word => word.map(letter => letterToNumberMap[letter]));
    
    setDivLetterN(mappedLetters)

    const answersLength = L3_SPT[round].resposta.length;
    let tempAnswers = [];

    for (let a = 0; a < answersLength; a ++) {
      tempAnswers.push(L3_SPT[round].resposta[a]);
    }

    setAnswersQ(tempAnswers);
    setBlock(false);
  }

  const newRound = (number) => {
    setQuestion(L3_SPT[number].pergunta);

    const answersLength = L3_SPT[number].resposta.length;
    let tempAnswers = [];

    for (let a = 0; a < answersLength; a ++) {
      tempAnswers.push(L3_SPT[number].resposta[a]);
    }

    setAnswersQ(tempAnswers);
    setBlock(false);
  }

  const handleClick = () => {
    const isCorrect = userAnswers.join("") === answersQ.join("");
    
    if (isCorrect) {
       const revealedLetters = answersQ.map((answer, index) => {
        return answer.split("").map((letter, letterIndex) => {
          return (
            <DivLetter2 key={letterIndex}>
              {letter}
            </DivLetter2>
          );
        });
      });

      setDivLetter(revealedLetters);
    }
  }

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);

    if (currentWordIndex < divLetterN.length && currentLetterIndex < divLetterN[currentWordIndex].length) {
      const currentLetter = divLetterN[currentWordIndex][currentLetterIndex];

      if (currentLetter === letterToNumberMap[letter]) {
        const newDivLetterN = [...divLetterN];
        newDivLetterN[currentWordIndex][currentLetterIndex] = letter;
        setDivLetterN(newDivLetterN);

        setCurrentLetterIndex(currentLetterIndex + 1);

        if (currentLetterIndex === divLetterN[currentWordIndex].length - 1) {
          setCurrentWordIndex(currentWordIndex + 1);
          setCurrentLetterIndex(0);
        }
      }
    }
  }

  useEffect(() => {
    loadLesson();
  } , [])
  
  return (
    <Container>
      <HeaderLesson numStart="Super Task" numEnd="Finish" superTaskStart trophyEnd />

      <Main>
        {!changed ? 
          <Phrase>
            <h2>Solve the code to answer the question.</h2>

            <Letters>
              {keyboardLetters.map((letter, index) => {
                return (
                  <button 
                    key={index}
                    onClick={() => handleLetterClick(letter)}
                  >
                    <p>{letter.toUpperCase()}</p>
                    <LineSeparator />
                    <span>{index + 1}</span>
                  </button>
                )
              })}
            </Letters>

            <TypeLetters>
              {divLetterN.map((letters, letterIndex) => {
                return (
                  <DivWord key={letterIndex}>
                    {letters.map((letter, index) => {
                      const displayLetter = 
                      selectedLetter && letterToNumberMap[selectedLetter] === letter ?
                      selectedLetter : letter;
                      return (
                        <DivLetter 
                          key={index}
                          style={{
                            borderColor: 
                              currentLetterIndex === letterIndex &&
                                currentLetterIndex === index ? defaultTheme["blue-100"] : ''
                          }}
                        >
                          {displayLetter}
                        </DivLetter>
                      )
                    })}
                  </DivWord>
                )
              })}
              <DivLetter>?</DivLetter>
            </TypeLetters>

            <ButtonClean>
              <p>Clean</p>
            </ButtonClean>
          </Phrase>
        :
          <Answer>
            <h2>Now answer the question.</h2>

            <TypeLetters2>
              {divLetter.map((letters, letterIndex) => {
                return (
                  <DivWord key={letterIndex}>
                    {letters.map((letter, index) => {
                      return (
                        <DivLetter2 key={index}>
                          {letter}
                        </DivLetter2>
                      )
                    })}
                  </DivWord>
                )
              })}
              <DivLetter2>?</DivLetter2>
            </TypeLetters2>

            <form id="myForm" >
              <Input 
                placeholder="Type here"
                required
                onChange={(e) => setText(e.target.value)}
                style={{
                  backgroundColor: optionColor === 0 ? "" : optionColor === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                  color: optionColor === 0 ? "" : defaultTheme.white,
                  border: optionColor === 0 ? "" : "none",
                }}
              />
            </form>
            <Button
              form="myForm"
              type="submit"
              title="Enter"
            ><p>Check</p></Button>
          </Answer>
        }
      </Main>
    </Container>
  )
}