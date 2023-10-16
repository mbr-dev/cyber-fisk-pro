import { useState, useContext, useEffect, useCallback } from "react";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";
import { ButtonAnswer } from "../ButtonAnswer";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, ButtonArea, Letter, LettersArea } from "./styles";

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
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);
      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=1&num_task=1");
      const res = response.data;

      let items = JSON.parse(res.dados[0].dados_conteudo[0].conteudo);
      
      let tempLetters = items.letras;
      setLetters(tempLetters);
      let tempAnswers = items.resposta;
      setAnswers(tempAnswers);
    } catch(error) {
      console.log(error);
    }
    setIsLoading(false);
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

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
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
              <ButtonAnswer 
                key={index}
                w="1rem"
                h="2.75rem"
                onPress={() => handleClick(letter)}
              >
                <p className="pBold">{letter}</p>
              </ButtonAnswer>
            )
          })}
        </ButtonArea>

        <ButtonBg
          h="2.5rem"
          w="9rem"
          onPress={handleClearField}
          title="Clear"
        />
      </Main>
    </Container>
  )
}