import { useState, useContext, useEffect, useCallback } from "react";

import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";

import { L1_SUPER_LESSON } from "../../utils/lesson1_Task";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, ButtonArea, ButtonLetter, ButtonClear, Letter, LettersArea } from "./styles";

export const GameSL1 = () => {
  const {setTimeElapsed, timeElapsed} = useContext(LessonContext);

  const [optionColor, setOptionColor] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [lettersAnswer, setLettersAnswer] = useState(["", "", "", "", "", "", "", "", ""]);
  const [numberClick, setNumberClick] = useState(0);
  const [letters, setLetters] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [answered, setAnswered] = useState([]);
  const [rightPoints, setRightPoints] = useState(0);
  const [wordLength, setWordLength] = useState(6);

  const loadLesson = useCallback(() => {
    let tempLetters = L1_SUPER_LESSON[0].letras;
    setLetters(tempLetters);
    let tempAnswers = L1_SUPER_LESSON[0].resposta;
    setAnswers(tempAnswers);
  }, [setLetters, setAnswers]);

  const handleClearField = () => {
    let tempLetters = lettersAnswer;
    let tempNumber = numberClick;
    tempNumber--;
    tempLetters[tempNumber] = "";

    if (tempNumber < 1) {
      tempNumber = 0;
    }
    
    setLettersAnswer(tempLetters);
    setNumberClick(tempNumber);
  }

  const clearFields = () => {
    let temp = ["", "", "", "", "", "", "", "", ""];
    setNumberClick(0);
    setLettersAnswer(temp);
    setOptionColor([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const handleClick = (letter) => {
    let temp = lettersAnswer;
    let tempNumber = numberClick;

    temp[tempNumber] = letter;
    tempNumber++;

    setLettersAnswer(temp);
    setNumberClick(tempNumber);
    let rightWord = "";

    lettersAnswer.map((index) => {
      rightWord += index;
    });

    answers.map((world) => {
      if (rightWord.toUpperCase() === world.toUpperCase()) {
        if (answered.includes(world)) {
          alert(`Voce já acertou esta palavra: ${world}`);
        } else {
          let tempAnswer = answered;
          tempAnswer.push(world);
          setAnswered(tempAnswer);

          setOptionColor([1, 1, 1, 1, 1, 1, 1, 1, 1]);
          setWordLength(state => state - 1);
        }

        setTimeout(() => {
          clearFields();
        }, 1500);
      }
    })

    if (tempNumber > 9) {
      clearFields();
    }

    let finished = answers.every(word => answered.includes(word));

    if (answers.length > 0) {
      if (finished) {
        let tempRightPoints = rightPoints;
        
        if (timeElapsed <= 60) {
          tempRightPoints += 5;
        } else if (timeElapsed >= 61 && timeElapsed <= 75) {
          tempRightPoints += 4;
        } else if (timeElapsed >= 76 && timeElapsed <= 90) {
          tempRightPoints += 3;
        } else if (timeElapsed >= 91 && timeElapsed <= 120) {
          tempRightPoints += 2;
        } else {
          tempRightPoints += 1;
        }

        setRightPoints(tempRightPoints);
        alert("Pontos: " + tempRightPoints);
      } else {
        return;
      }
    } else {
      return;
    }
  }

  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeElapsed(state => {
          return state + 1
        })
      }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed]);

  return (
    <Container>
      <HeaderLesson superTaskStart trophyEnd numStart="Super task" numEnd="Finish" />
      <TitleLesson title={
        `How many nationalities can you write with these letters? There are ${wordLength} ${wordLength > 1 ? "words" : "word"}.`
      } />

      <Main>
        <LettersArea>
          {lettersAnswer.map((letter, index) => {
            return (
              <Letter 
                key={index}
                style={{
                  borderColor: numberClick === index ? defaultTheme["red-200"] : optionColor[index] === 1 ? "transparent" : "",
                  backgroundColor: optionColor[index] === 1 ? defaultTheme["green-200"] : "",
                  color: optionColor[index] === 1 ? defaultTheme.white : "",
                  
                }}
              >
                {letter}
              </Letter>
            )
          })}
        </LettersArea>

        <ButtonArea>
          {letters.map((letter, index) => {
            return (
              <ButtonLetter
                key={index}
                onClick={() => handleClick(letter)}
              >
                <p>{letter}</p>
              </ButtonLetter>
            )
          })}
        </ButtonArea>

        <ButtonClear onClick={handleClearField} >
          <p>Clear</p>
        </ButtonClear>
      </Main>
    </Container>
  )
}