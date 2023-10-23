import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { api } from "../../lib/api";
import { L9_SUPER_LESSON } from "../../utils/lesson9_Task";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, DivLetter, Letters, LineSeparator, TypeLetters, Phrase, DivWord, Answer, Input, TypeLetters2, DivLetter2, ButtonClean } from "./styles";

export const GameSL9 = () => {
  const { setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, setTimeElapsed } = useContext(LessonContext);

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
      //const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=3&num_task=1");
      //const res = response.data;
      //setData(res.dados[0].dados_conteudo);
      
      //let items = JSON.parse(res.dados[0].dados_conteudo[round].conteudo);
      const items = L9_SUPER_LESSON[round];
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

    //const items = JSON.parse(data[number].conteudo);
    const items = L9_SUPER_LESSON[number];
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
    } else if (countTimer >= 31 && countTimer <= 45) {
      tempP += 4;
    } else if (countTimer >= 46 && countTimer <= 75) {
      tempP += 3;
    } else if (countTimer >= 76 && countTimer <= 105) {
      tempP += 2;
    } else if (countTimer >= 106 && countTimer <= 120) {
      tempP += 1;
    } else {
      tempP = 0;
    }

    let tempWord = text.trim().replace(/'/g, "’").toLowerCase();

    let isAnswerCorrect = false;

    if (round >= 4 && round <= 9) {
      answersOfQuestion.forEach((answer) => {
        if (tempWord.includes(answer.toLowerCase())) {
          isAnswerCorrect = true
        }
      });

      if (isAnswerCorrect) {
        setOptionColorQ(1);
        setCorrectPoints(tempP);
      } else {
        setOptionColorQ(2);
        let tempE = wrongPoints;
        tempE++;
        setWrongPoints(tempE);
      }
    } else {
      answersOfQuestion.forEach((answer) => {
        if (tempWord === answer.toLowerCase()) {
          isAnswerCorrect = true
        }
      });

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
      }, 2000);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(state => state + 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed]);

  useEffect(() => {
    text.trim() === "" ? setBlock(true) : setBlock(false);
  }, [text, setBlock]);

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
            <ButtonBg
              mt="1.5rem"
              w="13rem"
              h="3rem"
              form="myForm"
              type="submit"
              title="Check"
              greenBtn
              disabledButton={block}
            />
          </Answer>
        }
      </Main>
    </Container>
  )
}