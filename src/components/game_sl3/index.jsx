import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";

import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, DivLetter, Letters, LineSeparator, TypeLetters, Phrase, DivWord, Answer, Button, Input, TypeLetters2, DivLetter2, ButtonClean } from "./styles";

export const GameSL3 = () => {
  const { conteudoSuperTask, newInfoST, rodadaGeral, setNewRodada } = useContext(LessonContext);

  const keyboardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const navigate = useNavigate();

  const [optionColorQ, setOptionColorQ] = useState(0);
  const [round, setRound] = useState(0);
  const [question, setQuestion] = useState("");
  const [data, setData] = useState([]);
  const [divLetter, setDivLetter] = useState([]);
  const [divLetterRight, setDivLetterRight] = useState([]);
  const [answersOfQuestion, setAnswersOfQuestion] = useState([]);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [block, setBlock] = useState(true);
  const [changed, setChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [countTimer, setCountTimer] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [selectedWrongIndexes, setSelectedWrongIndexes] = useState([]);

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);
      
      setData(conteudoSuperTask);
      let items = JSON.parse(conteudoSuperTask[0].conteudo);
      let tempQuestion = items.pergunta.toUpperCase();
      setQuestion(tempQuestion);
      
      let letterQuestion = tempQuestion.split(" ");
      const lettersIndex = letterQuestion.map(word => word.split("").map(letter => keyboardLetters.indexOf(letter)));
      const lettersWord = lettersIndex.map(word => word.map(index => keyboardLetters[index]));
      setDivLetter(lettersIndex);
      setDivLetterRight(lettersWord);
      
      const answersLength = items.resposta.length;
      let tempAnswers = [];

      for (let a = 0; a < answersLength; a ++) {
        tempAnswers.push(items.resposta[a]);
      }
      setAnswersOfQuestion(tempAnswers);
      setBlock(false);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [round, keyboardLetters, setQuestion, setDivLetter, setDivLetterRight, setBlock, setAnswersOfQuestion])

  const newRound = (number) => {
    setText("");
    setOptionColorQ(0);
    setSelectedIndexes([]);
    setSelectedWrongIndexes([]);

    const items = JSON.parse(data[number].conteudo);

    let tempQuestion = items.pergunta.toUpperCase();
    setQuestion(tempQuestion);

    let letterQuestion = tempQuestion.split(" ");
    const lettersIndex = letterQuestion.map(word => word.split("").map(letter => keyboardLetters.indexOf(letter)));
    const lettersWord = lettersIndex.map(word => word.map(index => keyboardLetters[index]));
    setDivLetter(lettersIndex);
    setDivLetterRight(lettersWord);

    const answersLength = items.resposta.length;
    let tempAnswers = [];

    for (let a = 0; a < answersLength; a ++) {
      tempAnswers.push(items.resposta[a]);
    }

    setCountTimer(0);
    setAnswersOfQuestion(tempAnswers);
    setChanged(false);
  }

  const handleLetterClick = (index) => {
    if (divLetter.length > 0) {
      const letterToReplace = keyboardLetters[index];

      const newDivLetter = divLetter.map((letters) =>
        letters.map((letter) => letter === index ? letterToReplace : letter)
      );

      setDivLetter(newDivLetter);

      if (divLetter.some(letter => letter.includes(index))) {
        setSelectedIndexes([...selectedIndexes, index]);
      } else {
        setSelectedWrongIndexes([...selectedWrongIndexes, index]);
      }
    }
  }

  // const handleCleanLetterQuestion = () => {
  //   let tempQuestion = L3_SPT[round].pergunta.toUpperCase();
  //   setQuestion(tempQuestion);

  //   let letterQuestion = tempQuestion.split(" ");
  //   const letter = letterQuestion.map(word => word.split("").map(letter => keyboardLetters.indexOf(letter)));
  //   setDivLetter(letter);
  // }

  const handleVerifyAnswers = (event) => {
    event.preventDefault();

    let tempP = correctPoints;
    
    if (countTimer <= 30) {
      tempP += 5;
      console.log('ganhou 5 pontos')
    } else if (countTimer >= 31 && countTimer <= 45) {
      tempP += 4;
      console.log('ganhou 4 pontos')
    } else if (countTimer >= 46 && countTimer <= 75) {
      tempP += 3;
      console.log('ganhou 3 pontos')
    } else if (countTimer >= 76 && countTimer <= 105) {
      tempP += 2;
      console.log('ganhou 2 pontos')
    } else if (countTimer >= 106 && countTimer <= 120) {
      tempP += 1;
      console.log('ganhou 1 pontos')
    } else {
      tempP = 0;
      console.log('ganhou 0 pontos')
    }

    const userText = text.replace(/'/g, "’");
  
    if (round >= 6 && round <= 9) {
      const correctStarts = [
        "I have dinner at",
        "I need to buy",
        "They",
        "I have"
      ];

      const isStartCorrect = correctStarts.some((start) => userText.startsWith(start));

      if (isStartCorrect) {
        setOptionColorQ(1);
        setCorrectPoints(tempP);
      } else {
        setOptionColorQ(2);
        let tempE = wrongPoints;
        tempE++;
        setWrongPoints(tempE);
      }
    } else {
      const isAnswerCorrect = answersOfQuestion.some((answer) => answer === userText);

      if (isAnswerCorrect) {
        setOptionColorQ(1);
        setCorrectPoints(tempP);
      } else {
        setOptionColorQ(2);
        let tempE = wrongPoints;
        tempE++;
        setWrongPoints(tempE);
      }
    }
    
    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    if (tempRound === 10) {
      setTimeout(() => {
        navigate("/WellDone")
      }, 2000)
    } else {
      setTimeout(() => {
        newRound(tempRound);
      }, 2000);
    }
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
  }, [divLetter, divLetterRight, setChanged]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountTimer(state => state + 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [countTimer]);

  if (isLoading) {
    return (
      <Loading />
    )
  }
  
  return (
    <Container>
      {changed ? 
        <TitleLesson title="Now answer the question." />
        :
        <TitleLesson title="Solve the code to answer the question." />
      }
      <Main>
        {!changed ? 
          <Phrase>
            <Letters>
              {keyboardLetters.map((letter, index) => {
                const isRight = selectedIndexes.includes(index);
                const isWrong  = selectedWrongIndexes.includes(index);
                return (
                  <button 
                    key={index}
                    onClick={() => handleLetterClick(index)}
                    className={isRight ? "selected" : isWrong ? "erro" : ""}
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
                      const isString = typeof letter === "string";

                      return (
                        <DivLetter 
                          key={index}
                          className={isString ? "checked" : ""}
                        >
                          {letter}
                        </DivLetter>
                      )
                    })}
                  </DivWord>
                )
              })}
              <DivLetter className="checked">
                ?
              </DivLetter>
            </TypeLetters>

            {/* <ButtonClean onClick={handleCleanLetterQuestion}>
              <p>Clean</p>
            </ButtonClean> */}
          </Phrase>
        :
          <Answer>
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