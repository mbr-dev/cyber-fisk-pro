import { useEffect, useState, useContext } from "react";

import { HeaderLesson } from "../HeaderLesson";

import { L3_SPT } from "../../utils/Lesson3_Task2";
import { TrocaAtividade } from "../../utils/regras";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, DivLetter, Letters, LineSeparator, TypeLetters, Phrase, DivWord, Answer, Button, Input, TypeLetters2, DivLetter2, ButtonClean } from "./styled";

export const GameSL3 = () => {
  const keyboardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio } = useContext(LessonContext);

  const [optionColorQ, setOptionColorQ] = useState(0);
  const [round, setRound] = useState(0);
  const [question, setQuestion] = useState("");
  const [divLetter, setDivLetter] = useState([]);
  const [divLetterRight, setDivLetterRight] = useState([]);
  const [answersOfQuestion, setAnswersOfQuestion] = useState([]);
  const [answersA, setAnswersA] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [toHit, setToHit] = useState(0);
  const [erro, setErro] = useState(0);
  const [block, setBlock] = useState(true);
  const [changed, setChanged] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [divLetterClasses, setDivLetterClasses] = useState([]);
  const [text, setText] = useState("");
  const [countTimer, setCountTimer] = useState(0);

  const loadLesson = () => {
    let tempQuestion = L3_SPT[round].pergunta.toUpperCase();
    setQuestion(tempQuestion);

    let letterQuestion = tempQuestion.split(" ");
    const lettersIndex = letterQuestion.map(word => word.split("").map(letter => keyboardLetters.indexOf(letter)));
    const lettersWord = lettersIndex.map(word => word.map(index => keyboardLetters[index]));
    setDivLetter(lettersIndex);
    setDivLetterRight(lettersWord);

    const answersLength = L3_SPT[round].resposta.length;
    let tempAnswers = [];

    for (let a = 0; a < answersLength; a ++) {
      tempAnswers.push(L3_SPT[round].resposta[a]);
    }

    setAnswersOfQuestion(tempAnswers);
    setBlock(false);
    setChanged(false);
    setCountTimer(0);
  }

  const newRound = (number) => {
    setText("");
    setOptionColorQ(0);

    let tempQuestion = L3_SPT[number].pergunta.toUpperCase();
    setQuestion(tempQuestion);

    let letterQuestion = tempQuestion.split(" ");
    const lettersIndex = letterQuestion.map(word => word.split("").map(letter => keyboardLetters.indexOf(letter)));
    const lettersWord = lettersIndex.map(word => word.map(index => keyboardLetters[index]));
    setDivLetter(lettersIndex);
    setDivLetterRight(lettersWord);

    const answersLength = L3_SPT[number].resposta.length;
    let tempAnswers = [];

    for (let a = 0; a < answersLength; a ++) {
      tempAnswers.push(L3_SPT[number].resposta[a]);
    }

    setCountTimer(0);
    setAnswersOfQuestion(tempAnswers);
    setChanged(false);
  }

  const handleLetterClick = (index) => {
    if (divLetter.length > 0) {
      const letterToReplace = keyboardLetters[index];
      
      const newDivLetter = divLetter.map((letters, i) =>
        letters.map((letter, j) =>
          letter === index ? letterToReplace : letter
        )
      );
  
      setDivLetter(newDivLetter);
    }
  }

  const handleCleanLetterQuestion = () => {
    let tempQuestion = L3_SPT[round].pergunta.toUpperCase();
    setQuestion(tempQuestion);

    let letterQuestion = tempQuestion.split(" ");
    const letter = letterQuestion.map(word => word.split("").map(letter => keyboardLetters.indexOf(letter)));
    setDivLetter(letter);
  }

  const handleVerifyAnswers = (event) => {
    event.preventDefault();
    
    const userText = text.replace(/'/g, "’");
    const isAnswerCorrect = answersOfQuestion.some((answer) => answer === userText);
    
    let tempHit = toHit;
    
    if (countTimer <= 30) {
      tempHit += 5;
    } else if (countTimer > 31 && countTimer <= 45) {
      tempHit += 4;
    } else if (countTimer > 46 && countTimer <= 75) {
      tempHit += 3;
    } else if (countTimer > 76 && countTimer <= 105) {
      tempHit += 2;
    } else {
      tempHit += 1;
    }
    
    if (isAnswerCorrect) {
      setToHit(tempHit);
      setOptionColorQ(1);
    } else {
      tempHit += 0;
      setToHit(tempHit);
      setOptionColorQ(2);
    }
    
    let tempRound = round;
    tempRound++;
    setRound(tempRound);
    
    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);
    
    console.log('PONTUAÇÂO: ', tempHit);
    console.log('RODADA: ', tempRound);
    console.log('RODADAGWERAL: ', tempGeneralRound);

    setTimeout(() => {
      newRound(tempRound);
    }, 2000);
    
    // const rule = TrocaAtividade(2, tempGeneralRound, tempHit, tempRound);
    // if (rule === "Continua") {
    //   setTimeout(() => {
    //     newRound(tempRound);
    //   }, 2000);
    // } else if (rule === "Game over") {
    //   setNewPontos(0, 0);
      
    //   setTimeout(() => {
    //     setNewContainer(1);
    //   }, 2000);
    // }
  }

  useEffect(() => {
    loadLesson();
  } , []);

  useEffect(() => {
    const checkIfLettersMatch = () => {
      const letter = divLetter.map((letters) => letters.join("")).join("");
      const lettersRight = divLetterRight.map((letters) => letters.join("")).join("");
      return letter === lettersRight;
    };

    if (divLetter.length > 0 && checkIfLettersMatch()) {
      setTimeout(() => {
        setChanged(true);
      }, 1500);
    } else {
      setChanged(false);
    }
  }, [divLetter, divLetterRight]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountTimer(state => state + 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [countTimer]);
  
  return (
    <Container>
      <HeaderLesson numStart="Super Task" numEnd="Finish" superTaskStart trophyEnd />
      <span>{countTimer}</span>
      <Main>
        {!changed ? 
          <Phrase>
            <h2>Solve the code to answer the question.</h2>

            <Letters>
              {keyboardLetters.map((letter, index) => {
                return (
                  <button 
                    key={index}
                    onClick={() => handleLetterClick(index)}
                  >
                    <p>{letter.toUpperCase()}</p>
                    <LineSeparator />
                    <span>{index}</span>
                  </button>
                )
              })}
            </Letters>

            <TypeLetters>
              {divLetter.map((letters, letterIndex) => {
                return (
                  <DivWord key={letterIndex}>
                    {letters.map((letter, index) => {
                      return (
                        <DivLetter 
                          key={index}
                        >
                          {letter}
                        </DivLetter>
                      )
                    })}
                  </DivWord>
                )
              })}
              <DivLetter className="checked"
              >
                ?
              </DivLetter>
            </TypeLetters>

            <ButtonClean onClick={handleCleanLetterQuestion}>
              <p>Clean</p>
            </ButtonClean>
          </Phrase>
        :
          <Answer>
            <h2>Now answer the question.</h2>

            <TypeLetters2>
              {divLetterRight.map((letters, letterIndex) => {
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

            <form id="myForm" onSubmit={handleVerifyAnswers} >
              <Input 
                placeholder="Type here"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  backgroundColor: optionColorQ === 0 ? "" : optionColorQ === 1 ? defaultTheme["green-200"] : defaultTheme["red-200"],
                  color: optionColorQ === 0 ? "" : defaultTheme.white
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