import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { HeaderLessonSL1 } from "../HeaderLessonSL1";
import { AreaFooterTasks } from "../AreaFooterTasks";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, ButtonArea, Letter, LettersArea, AreaButtons, ButtonAnswer, Button, DivAnswer, Div, DivRow, Left, Right } from "./styles";

export const GameSL1 = () => {
  const { 
    setTimeElapsed, timeElapsed, statusColor, setStatusColor, rodadaGeral, setNewRodada
  } = useContext(LessonContext);

  const [lettersAnswer, setLettersAnswer] = useState([]);
  const [data, setData] = useState([]);
  const [numberClick, setNumberClick] = useState(0);
  const [round, setRound] = useState(0);
  const [randomNumber, setRandomNumber] = useState([]);
  const [letters, setLetters] = useState([]);
  const [answers, setAnswers] = useState("");
  const [rightPoints, setRightPoints] = useState(0);
  const [wrongPoints, setWrongPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [blockButton, setBlockButton] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [blockLetters, setBlockLetters] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [wordsRight, setWordsRight] = useState([]);
  const [countTimer, setCountTimer] = useState(0);

  const navigate = useNavigate();

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);

      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=1&num_task=1");
      const res = response.data;
      setData(res.dados[0].dados_conteudo);
      
      let dataLength = res.dados[0].dados_conteudo.length;
      
      let tempRandom = [];
      for (let a = 0; a < dataLength; a++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);
      setRandomNumber(tempRandom);
      
      const items = JSON.parse(res.dados[0].dados_conteudo[tempRandom[round]].conteudo);

      const letter = Array(items.resposta.length).fill("");
      setLettersAnswer(letter);

      setAnswers(items.resposta);

      let tempLetters = items.letras;
      tempLetters = tempLetters.sort(() => Math.random() - 0.5);
      setLetters(items.letras);
      timePointer();
      setShowWord(false);
      setStatusColor([0, 0, 0, 0, 0, 0]);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setRandomNumber, setStatusColor, setShowWord, setData, round, setLettersAnswer, setLetters, setAnswers]);

  const newRound = (number) => {
    setCountTimer(0);
    timePointer();

    const items = JSON.parse(data[randomNumber[number]].conteudo);

    const letter = Array(items.resposta.length).fill("");
    setLettersAnswer(letter);

    setAnswers(items.resposta);
    setLetters(items.letras);
    setShowWord(true);
    setBlockLetters(false);
  }

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

  const handleClick = (letter) => {
    let temp = lettersAnswer;
    let tempNumber = numberClick;

    temp[tempNumber] = letter;
    tempNumber++;

    setLettersAnswer(temp);
    setNumberClick(tempNumber);
  }

  const handleVerify = () => {
    const word = lettersAnswer.join("");

    if (word.toLowerCase() === answers.toLowerCase()) {
      setWordsRight(state => [...state, answers]);

      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 1;
      setStatusColor(newStatus);

      if (countTimer > 91) {
        const newStatus = [...statusColor];
        newStatus[rodadaGeral] = 2;
        setStatusColor(newStatus);
      }

      let tempA = rightPoints;

      if (countTimer < 60) {
        tempA += 5;
      } else if (countTimer >= 61 || countTimer <= 75) {
        tempA += 4;
      } else if (countTimer >= 76 || countTimer <= 90) {
        tempA += 3;
      } else if (countTimer >= 91 || countTimer <= 120) {
        tempA += 2;
      } else {
        tempA += 1;
      }

      setRightPoints(tempA);
    } else {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);

      let tempE = wrongPoints;
      tempE++;
      setWrongPoints(tempE);
    }

    setNumberClick(0);
    setBlockButton(true);

    let tempRound = round;
    tempRound++;
    setRound(tempRound);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    setTimeout(() => {
      newRound(tempRound);
    }, 1500);
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
    const timer = setInterval(() => {
        setTimeElapsed(state => {
          return state + 1
        })
      }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed]);

  useEffect(() => {
    if (wrongPoints > 3) {
      setTimeout(() => {
        navigate("/GameOver");
      }, 1500);
    }

    if (round === 6) {
      setTimeout(() => {
        navigate("/WellDone");
      }, 1500);
    }
  }, [round, timeElapsed]);

  useEffect(() => {
    if (lettersAnswer.length === numberClick) {
      setBlockButton(false);
      setBlockLetters(true);
    } else {
      setBlockButton(true);
      setBlockLetters(false);
    }
  }, [numberClick, lettersAnswer, setBlockButton, setBlockLetters]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLessonSL1 trophyEnd superTaskStart numStart="Super task" numEnd="Finish" />
      <TitleLesson title="How many nationalities can you write with these letters?"/>

      <Main>
        <Left>
          <LettersArea>
            {lettersAnswer.map((letter, index) => {
              return (
                <Letter 
                  key={index}
                  style={{
                    borderColor: numberClick === index ? defaultTheme["red-200"] : "",
                  }}
                >
                  <p>{letter}</p>
                </Letter>
              )
            })}
          </LettersArea>

          <ButtonArea>
            {letters.map((letter, index) => {
              return (
                <ButtonAnswer 
                  key={index}
                  onClick={() => handleClick(letter)}
                  disabled={blockLetters}
                >
                  <p className="pBold">{letter}</p>
                </ButtonAnswer>
              )
            })}
          </ButtonArea>
        </Left>

        <Right>
          <AreaButtons>
            <Button onClick={handleClearField} $variant="red">Clear</Button>
            <Button onClick={handleVerify} disabled={blockButton}>Check</Button>
          </AreaButtons>

          {showWord &&
            <DivAnswer>
              {wordsRight.map((row, index) => {
                return (
                  <DivRow key={index}>
                    <p>{index + 1} -</p>
                    {row.split("").map((letter, index) => {
                      return (
                        <Div key={index}>{letter}</Div>
                        )
                    })}
                  </DivRow>
                )
              })}
            </DivAnswer>
          }
        </Right>
      </Main>

      <AreaFooterTasks />
    </Container>
  )
}